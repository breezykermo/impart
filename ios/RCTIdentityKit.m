//
//  RCTIdentityKit.m
//  Impart
//
//  Created by Lachlan Kermode on 7/20/16.
//  Copyright © 2016 Facebook. All rights reserved.
//
#import "RCTIdentityKit.h"
#import "RCTViewManager.h"
#import "IdentityKit.h"

@interface RCTIdentity: RCTViewManager
@end

@implementation RCTIdentity

RCT_EXPORT_MODULE()

- (UIView *)view
{
  IDButton *button = [[IDButton alloc] initWithFrame:CGRectMake(0, 0, 110, 40)];
  UIView *wrapper = [[UIView alloc] init];
  [wrapper addSubview:button];
  return wrapper;
}

@end
