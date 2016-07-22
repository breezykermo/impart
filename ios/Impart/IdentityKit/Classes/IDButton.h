//
//  IDButton.h
//  Pods
//
//  Created by Lachie Kermode on 6/3/16.
//
//

#import <UIKit/UIKit.h>
#import "IDApi.h"

@interface IDButton : UIButton

@property (strong, nonatomic) NSString *clientID;
@property (strong, nonatomic) NSString *clientSecret;
@property (strong, nonatomic) NSString *redirectURL;
@property (strong, nonatomic) NSString *applicationName;
@property (strong, nonatomic) NSArray<NSString*> *scopes;
@property (strong, nonatomic) IDApi *iDApi;

- (void)configureClientId:(NSString *)clientID
             ClientSecret:(NSString *)clientSecret
              RedirectURL:(NSString *)redirectURL
          ApplicationName:(NSString *)applicationName;

- (void)configureButton;

- (void)_setVerified;

- (void)_setUnverified;

- (void)removeAccessToken;

- (void)requestUserInfoWithHandler:(void (^)(NSURLResponse *response, NSData *responseData, NSError *error))handler;

@end
