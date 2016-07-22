//
//  RNIDButtonManager.m
//  Impart
//
//  Created by Lachlan Kermode on 7/22/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNIDButtonManager.h"
#import "RNIDButton.h"

@implementation RNIDButtonManager

RCT_EXPORT_MODULE()
@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RNIDButton alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

@end
