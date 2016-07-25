//
//  RNIdentityKit.h
//  RNIdentityKit
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Lachlan Kermode. All rights reserved.
//

#import <RCTBridge.h>
#import "IdentityKit.h"

@interface RNIDButton : UIButton <RCTBridgeModule>

@property (strong, nonatomic) NSString *clientID;
@property (strong, nonatomic) NSString *clientSecret;
@property (strong, nonatomic) NSString *redirectURL;
@property (strong, nonatomic) NSString *applicationName;
@property (strong, nonatomic) NSArray<NSString*> *scopes;
@property (nonatomic, assign) BOOL verified;
@property (strong, nonatomic) IDApi *iDApi;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher;

- (void)configureClientId:(NSString *)clientID
             ClientSecret:(NSString *)clientSecret
              RedirectURL:(NSString *)redirectURL
          ApplicationName:(NSString *)applicationName;

- (void)_setVerified;
- (void)_setUnverified;

@end
