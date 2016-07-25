//
//  RCTIDButton.h
//  Impart
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

@class RCTEventDispatcher;
@interface RCTIDButton : UIView
@property (nonatomic, assign) NSString *src;
@property (nonatomic, assign) NSNumber *contentMode;
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;
@end