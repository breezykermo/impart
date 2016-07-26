//
//  RNIdentityKit.h
//  RNIdentityKit
//
//  Created by Lachlan Kermode on 7/21/16.
//  Copyright © 2016 Lachlan Kermode. All rights reserved.
//
#import <UIKit/UIKit.h>
#import "IDApi.h"

@protocol IDButtonDelegate <NSObject>
@optional
- (void)idButton:(UIButton *)button didReceiveAccessToken:(NSString *)token;
@optional
- (void)idButton:(UIButton *)button didRemoveAccount:(NSNotification *)aNotification;
@optional
- (void)idButton:(UIButton *)button didReceiveError:(NSError *)error;
@optional
- (void)idButton:(UIButton *)button hasCachedToken:(NSString *)token;
@optional
- (void)idButton:(UIButton *)button didReceiveUserInfo:(id)json;
@optional
- (void)idButtonDidBecomeVerified:(UIButton *)button;
@optional
- (void)idButtonDidBecomeUnverified:(UIButton *)button;
@end

@interface IDButton: UIButton

@property (nonatomic, assign) id<IDButtonDelegate> delegate;

@property (strong, nonatomic) NSString *clientID;
@property (strong, nonatomic) NSString *clientSecret;
@property (strong, nonatomic) NSString *redirectURL;
@property (strong, nonatomic) NSString *applicationName;
@property (strong, nonatomic) NSArray<NSString*> *scopes;
@property (nonatomic, assign) BOOL verified;
@property (strong, nonatomic) IDApi *iDApi;

- (NSString *)getToken;
- (void)configureClientId:(NSString *)clientID
             ClientSecret:(NSString *)clientSecret
              RedirectURL:(NSString *)redirectURL
          ApplicationName:(NSString *)applicationName;
- (void)_setVerified;
- (void)_setUnverified;
- (void)requestUserInfoWithHandler:(void (^)(NSURLResponse *response, NSData *responseData, NSError *error))handler;

@end
