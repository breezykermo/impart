//
//  IDApi.h
//
//  Created by Lachie Kermode on 6/13/16.
//
//

#import <Foundation/Foundation.h>
#import "NXOAuth2.h"

typedef void (^ NotifiedBlock)(NSNotification *);

@class IDApi;

@interface IDApi : NSObject

#pragma mark - Available Properties

@property (nonatomic, assign) BOOL verified;
@property (nonatomic, assign) BOOL configured;
@property (strong, nonatomic) NSString *clientID;
@property (strong, nonatomic) NSString *clientSecret;
@property (strong, nonatomic) NSString *redirectURL;
@property (strong, nonatomic) NSString *applicationName;
@property (strong, nonatomic) NSString *accessToken;

+ (IDApi *)sharedInstance;

- (void)checkVerified;

- (BOOL)handleLoginRedirectFromUrl:(NSURL *)url;

- (void)setupWithSuccessBlock:(NotifiedBlock)successBlock
          AccountRemovedBlock:(NotifiedBlock)accountRemovedBlock
                   ErrorBlock:(void (^)(NSError *error))errorBlock;

- (void)requestAccessWithScopes:(NSArray *)scopes;

- (void)requestUserInfoWithHandler:(void (^)(NSURLResponse *response, NSData *responseData, NSError *error))handler;

- (void)removeAccountwithBrowserCookie:(BOOL)browserCookie;

@end