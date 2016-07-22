//
//  RCTIDButton.m
//  Impart
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTIDButton.h"
#import "IdentityKit.h"

#import "RCTBridgeModule.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"

@implementation RCTIDButton
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if (self = [super init]) {
    eventDispatcher = eventDispatcher;
    button = [[IDButton alloc] initWithFrame:CGRectMake(0, 0, 110, 40)];
    
    [_imageView addObserver:self forKeyPath:@"currentFrameIndex" options:0 context:nil];
  }
  
  return self;
}

RCT_EXPORT_VIEW_PROPERTY(clientID, NSString)
RCT_EXPORT_VIEW_PROPERTY(clientSecret, NSString)
RCT_EXPORT_VIEW_PROPERTY(redirectURL, NSString)
RCT_EXPORT_VIEW_PROPERTY(applicationName, NSString)


@end
