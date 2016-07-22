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
    // NB: We need a wrapper view to initialize with a given frame in this init method.
    [self addSubview:[[IDButton alloc] initWithFrame:CGRectMake(0, 0, 110, 40)]];
  }
  return self;
}


@end
