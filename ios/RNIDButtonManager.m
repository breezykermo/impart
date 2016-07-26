//
//  RNIDButtonManager.m
//  Impart
//
//  Created by Lachlan Kermode on 7/22/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNIDButtonManager.h"
#import "RCTUIManager.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

static RNIDButton *globalButton;

@interface RNIDButtonManager() <IDButtonDelegate>
@end

@implementation RNIDButtonManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(onAccessTokenRetrieval, RCTBubblingEventBlock)

@synthesize bridge = _bridge;

- (UIView *)view
{
  RNIDButton *button = [[RNIDButton alloc] init];
  button.delegate = self;
  globalButton = button;
  return button;
}

#pragma mark - Notify JS thread of delegate events

- (void)idButton:(RNIDButton *)button didReceiveAccessToken:(NSString *)token {
  NSLog(@"<RNIDButtonManager.m> Received token: %@", token);
  [self.bridge.eventDispatcher sendAppEventWithName:@"didReceiveAccessToken" body:(@{@"token": token})];
}

- (void)idButton:(RNIDButton *)button didReceiveUserInfo:(id)json {
  NSLog(@"<RNIDButtonManager.m> Received user info: %@", json);
  NSDictionary *scopes = (NSDictionary *)[(NSDictionary *)json objectForKey:@"scopes"];
  [self.bridge.eventDispatcher sendAppEventWithName:@"didReceiveUserInfo" body:(@{@"scopes": scopes})];
}

- (void)idButton:(UIButton *)button didReceiveError:(NSError *)error
{
  NSLog(@"<RNIDButtonManager.m> Received error: %@", error);
  [self.bridge.eventDispatcher sendAppEventWithName:@"didReceiveError" body:(@{@"error": error})];
}

- (void)idButton:(UIButton *)button hasCachedToken:(NSString *)token
{
  NSLog(@"<RNIDButtonManager.m> Has cached token: %@", token);
  [self.bridge.eventDispatcher sendAppEventWithName:@"hasCachedToken" body:(@{@"token": token})];
}

- (void)idButtonDidBecomeVerified:(UIButton *)button
{
  NSLog(@"<RNIDButtonManager.m> ID Button became verified.");
  [self.bridge.eventDispatcher sendAppEventWithName:@"didBecomeVerified" body:nil];
}

- (void)idButtonDidBecomeUnverified:(UIButton *)button
{
  NSLog(@"<RNIDButtonManager.m> ID Button became unverified.");
  [self.bridge.eventDispatcher sendAppEventWithName:@"didBecomeUnverified" body:nil];
}

#pragma mark - JS Props

RCT_CUSTOM_VIEW_PROPERTY(clientID, NSString, RNIDButton)
{
  [view setClientID:(json ? [RCTConvert NSString:json] : @"")];
}

RCT_CUSTOM_VIEW_PROPERTY(clientSecret, NSString, RNIDButton)
{
  [view setClientSecret:(json ? [RCTConvert NSString:json] : @"")];
}

RCT_CUSTOM_VIEW_PROPERTY(redirectURL, NSString, RNIDButton)
{
  [view setRedirectURL:(json ? [RCTConvert NSString:json] : @"")];
}

RCT_CUSTOM_VIEW_PROPERTY(applicationName, NSString, RNIDButton)
{
  [view setApplicationName:(json ? [RCTConvert NSString:json] : @"")];
}

RCT_CUSTOM_VIEW_PROPERTY(scopes, NSString, RNIDButton)
{
  [view setScopes:(json ? [RCTConvert NSArray:json] : @[])];
}

RCT_CUSTOM_VIEW_PROPERTY(textColor, UIColor, RNIDButton)
{
  [view setTitleColor:(json ? [RCTConvert UIColor:json] : [UIColor whiteColor]) forState:UIControlStateNormal];
}

RCT_CUSTOM_VIEW_PROPERTY(buttonText, NSString, RNIDButton)
{
//  cachedTitle = (json ? [RCTConvert NSString:json]: @"Verify");
  NSString *title = (json ? [RCTConvert NSString:json]: @"Verify");
  [view setTitle:title forState:UIControlStateNormal];
  [view setTitle:title forState:UIControlStateHighlighted];
  [view setTitle:title forState:UIControlStateDisabled];
}

#pragma mark - Initialization

RCT_EXPORT_METHOD(initialize:(nonnull NSNumber *)reactTag)
{
  [self.bridge.uiManager addUIBlock:
   ^(__unused RCTUIManager *uiManager, NSDictionary *viewRegistry){
     RNIDButton *idButton = viewRegistry[reactTag];
     
     if (![idButton.scopes isKindOfClass:[NSArray class]]) {
       BOOL legit = (idButton.scopes.count > 0);
       for (NSString *value in idButton.scopes) {
         if ([value class] != [NSString class]) legit = NO;
       }
       if (!legit) {
         RCTLogError(@"react-native-identity-kit: The 'scopes' prop passed into IDButton must be an array of strings.");
       }
     }
     
     if ([idButton isKindOfClass:[RNIDButton class]]
         && (idButton.clientID.length > 0)
         && (idButton.clientSecret.length > 0)
         && (idButton.redirectURL.length > 0)
         && (idButton.applicationName.length > 0)) {
       [idButton configureClientId:idButton.clientID
                      ClientSecret:idButton.clientSecret
                       RedirectURL:idButton.redirectURL
                   ApplicationName:idButton.applicationName];

     } else {
       RCTLogError(@"react-native-identity-kit: Cannot render IDButton. You need to pass clientID, clientSecret, redirectURL and applicationName to the IDButton component.");
     }
   }];
}


@end
