//
//  RNIdentityKit.m
//  RNIdentityKit
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Lachlan Kermode. All rights reserved.
//

#import "RNIDButton.h"

@implementation RNIDButton

RCT_EXPORT_MODULE()

- (NSString *)getToken
{
  if (_iDApi.accessToken) {
    return _iDApi.accessToken;
  } else {
    return nil;
  }
}

- (instancetype)init
{
  if (self = [super init]) {
    [self addTarget:self action:@selector(didClickUnverified) forControlEvents:UIControlEventTouchUpInside];
    _verified = NO;
  }
  return self;
}

- (void)configureClientId:(NSString *)clientID
             ClientSecret:(NSString *)clientSecret
              RedirectURL:(NSString *)redirectURL
          ApplicationName:(NSString *)applicationName
{
  _iDApi = [IDApi sharedInstance];
  _iDApi.clientID = clientID;
  _iDApi.clientSecret = clientSecret;
  _iDApi.redirectURL = redirectURL;
  _iDApi.applicationName = applicationName;
  /* establish transparent pointers to _iDApi */
  _clientID = _iDApi.clientID;
  _clientSecret = _iDApi.clientSecret;
  _redirectURL = _iDApi.redirectURL;
  _applicationName = _iDApi.applicationName;
  [_iDApi setupWithSuccessBlock:^(NSNotification *aNotification){
            NSLog(@"<IdentityKit/IDButton.m> Success, received new account");
            if ([self.buttonDelegate respondsToSelector:@selector(idApiTokenRetrieveSuccess:)]) {
              [self.buttonDelegate idApiTokenRetrieveSuccess:self.iDApi.accessToken];
            }
            [self _setVerified];
          }
          AccountRemovedBlock:^(NSNotification *aNotification){
            NSLog(@"<IdentityKit/IDButton.m> Success, removed account");
            if ([self.buttonDelegate respondsToSelector:@selector(idApiAccountRemoved:)]) {
              [self.buttonDelegate idApiAccountRemoved:aNotification];
            }
            [self _setUnverified];
          }
          ErrorBlock:^(NSError *error){
            NSLog(@"<IdentityKit/IDButton.m> Error! %@", error.localizedDescription);
            if ([self.buttonDelegate respondsToSelector:@selector(idApiError:)]) {
              [self.buttonDelegate idApiError:error];
            }
            [self _setUnverified];
          }];
  /* Check OAuth store for cached account */
  [_iDApi checkVerified];
  if (_iDApi.verified) {
    if ([self.buttonDelegate respondsToSelector:@selector(idApiHasCachedToken:)]) {
      [self.buttonDelegate idApiHasCachedToken:_iDApi.accessToken];
    }
    [self _setVerified];
  }
}

- (void)_setVerified
{
  NSLog(@"<IdentityKit/IDButton.m> Setting verified");
  if ([self.buttonDelegate respondsToSelector:@selector(idButtonDidBecomeVerified:)]) {
    [self.buttonDelegate idButtonDidBecomeVerified:self];
  }
  [self addTarget:self action:@selector(didClickVerified) forControlEvents:UIControlEventTouchUpInside];
  self.verified = YES;
}

- (void)didClickVerified {
  if (_iDApi.accessToken != nil) {
    NSLog(@"<IdentityKit/IDButton.m> Something has gone funny, you don't have a token yet");
    [self _setUnverified];
    [self didClickUnverified];
  }
  [_iDApi requestUserInfoWithHandler:^void (NSURLResponse *response, NSData *responseData, NSError *error) {
    // TODO: relay UserInfo to JS thread
    NSError *jsonError;
    id jsonDictionaryOrArray = [NSJSONSerialization JSONObjectWithData:responseData options:NSJSONReadingMutableContainers error:&jsonError];
    if(jsonError) {
      NSLog(@"<IdentityKit/IDButton.m> JSON error: %@", [jsonError localizedDescription]);
    } else {
      NSLog(@"<IdentityKit/IDButton.m> JSON received: %@", jsonDictionaryOrArray);
      if ([self.buttonDelegate respondsToSelector:@selector(idApiDidReceiveUserInfo:)]) {
        [self.buttonDelegate idApiDidReceiveUserInfo:jsonDictionaryOrArray];
      }
    }
  }];
}

- (void)_setUnverified
{
  NSLog(@"<IdentityKit/IDButton.m> Setting unverified");
  if ([self.buttonDelegate respondsToSelector:@selector(idButtonDidBecomeUnverified:)]) {
    [self.buttonDelegate idButtonDidBecomeUnverified:self];
  }
  [self addTarget:self action:@selector(didClickUnverified) forControlEvents:UIControlEventTouchUpInside];
  self.verified = NO;
}

- (void)didClickUnverified {
  if (!(self.clientID && self.clientSecret && self.redirectURL && self.applicationName)) {
    NSLog(@"<IdentityKit/IDButton.m> You need to set clientID, clientSecret, redirectURL and applicationName");
    // TODO: throw exception here? [NSException raise:@"Invalid foo value" format:@"foo of %d is invalid", foo];
    return;
    
  }
  if (!self.scopes) {
    NSLog(@"<IdentityKit/IDButton.m> You need to configure scopes on the button before you can make a request.");
    // TODO: throw exception here? [NSException raise:@"Invalid foo value" format:@"foo of %d is invalid", foo];
    return;
  }
  
  [_iDApi requestAccessWithScopes:_scopes];
}

- (void)removeAccessToken
{
  /* TODO: delete token at API, using delete route */
  [self.iDApi removeAccountwithBrowserCookie:YES];
  [self _setUnverified];
}

- (void)requestUserInfoWithHandler:(void (^)(NSURLResponse *response, NSData *responseData, NSError *error))handler
{
  NSString *token = [self getToken];
  if (token != nil) {
    [_iDApi requestUserInfoWithHandler:handler];
  } else {
    NSLog(@"<IdentityKit/IDButton.m> Could not find accessToken, make sure you retrieve it first.");
    return;
  }
}


@end
