//
//  RNIdentityKit.h
//  RNIdentityKit
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Lachlan Kermode. All rights reserved.
//

#import <RCTBridge.h>
#import "IdentityKit.h"
#import "RCTComponent.h"

@interface RNIDButton : IDButton <RCTBridgeModule>

@property (nonatomic, assign) RCTBubblingEventBlock onAccessToken;
@property (nonatomic, assign) RCTBubblingEventBlock onUserInfo;

@end
