//
//  RNIdentityKit.m
//  RNIdentityKit
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Lachlan Kermode. All rights reserved.
//

#import "RNIDButton.h"

@implementation RNIDButton {
  RCTEventDispatcher *_eventDispatcher;
}

RCT_EXPORT_MODULE()

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if (self = [super init]) {
    _eventDispatcher = eventDispatcher;
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
            NSLog(@"Success, received new account");
            [self _setVerified];
          }
          AccountRemovedBlock:^(NSNotification *aNotification){
            NSLog(@"Success, removed account");
            [self _setUnverified];
          }
          ErrorBlock:^(NSError *error){
           NSLog(@"Error! %@", error.localizedDescription);
           [self _setUnverified];
          }];
  /* Check OAuth store for cached account */
  [_iDApi checkVerified];
  if (_iDApi.verified) {
    // TODO: relay token to JS thread
    [self _setVerified];
  }
}

- (void)_setVerified
{
  NSLog(@"Setting verified");
  [self addTarget:self action:@selector(didClickVerified) forControlEvents:UIControlEventTouchUpInside];
  self.verified = YES;
}

- (void)didClickVerified {
  if (_iDApi.accessToken != nil) {
    NSLog(@"Something has gone funny, you don't have a token yet");
    [self _setUnverified];
    [self didClickUnverified];
  }
//  [_iDApi requestUserInfoWithHandler:handler];
}

- (void)_setUnverified
{
  NSLog(@"Setting unverified");
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

@end
