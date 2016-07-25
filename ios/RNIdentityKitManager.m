//
//  RNIdentityKitManager.m
//  RNIdentityKit
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Lachlan Kermode. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridge.h"
#import "RNIdentityKitManager.h"
#import "RNIDButton.h"

@implementation RNIdentityKitManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RNIDButton alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

@end
