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
    [super configureButton];
  }
  return self;
}


@end
