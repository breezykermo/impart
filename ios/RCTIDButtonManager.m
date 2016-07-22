//
//  RCTIDButtonManager.m
//  Impart
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridge.h"
#import "RCTIDButtonManager.h"
#import "RCTIDButton.h"

@implementation RCTIDButtonManager

RCT_EXPORT_MODULE(@"IDButton")

@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RCTIDButton alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}


@end
