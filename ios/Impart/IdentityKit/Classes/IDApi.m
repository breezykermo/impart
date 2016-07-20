//
//  IDApi.m
//  A big thanks to sachinkesiraju for his open source UberKit,
//  which inspired the OAuth2 structure in this Kit.
//  https://github.com/sachinkesiraju/UberKit
//
//  Created by Lachie Kermode on 6/13/16.
//

#include <stdlib.h>
#import "IDApi.h"
@import SafariServices;

@interface IDApi ()
@property (strong, nonatomic) NXOAuth2Account *nxAccount;
@property int state;
@end

@implementation IDApi

#pragma mark - Public API

+ (IDApi *)sharedInstance
{
    /* Create sharedInstance as singleton */
    static IDApi *_sharedInstance;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        _sharedInstance = [[self alloc] init];
    });

    return _sharedInstance;
}

- (BOOL) handleLoginRedirectFromUrl:(NSURL *)url
{
    /* Check state and callback URL: note that this is actually already done in NSOAuth2AccountStore ??? */
    NSString *baseUrl = [[url absoluteString] componentsSeparatedByString:@"?"][0];
    NSArray *rParamString = [[[url absoluteString] componentsSeparatedByString:@"?"][1] componentsSeparatedByString:@"&"];

    NSLog([baseUrl lowercaseString]);
    if ([[baseUrl lowercaseString] isEqualToString:_redirectURL]) {
        // Parse params of callback URL
        NSMutableDictionary *rParams = [[NSMutableDictionary alloc] init];
        NSString *key;
        NSString *param;
        for (NSString *paramString in rParamString) {
            NSRange range = [paramString rangeOfString:@"="];
            key = [paramString substringToIndex:range.location];
            param = [paramString substringFromIndex:range.location + 1];
            rParams[key] = param;
        }
        // Check matching state
        NSLog(@"%@", rParams.description);
        NSString *rState = [rParams valueForKey:@"state"];
        NSString *apiState = [NSString stringWithFormat:@"%d", [IDApi sharedInstance].state];
        if (![rState isEqualToString:apiState]) { return false; } // TODO: don't return false, update UI appropriately
    }
    return [[NXOAuth2AccountStore sharedStore] handleRedirectURL:url];
}

- (void)checkVerified
{
    // NB: This is a frail way to test for cached tokens, as it disallows wider use of NXOAuth2AccountStore,
    //     with accountTypes of the same name as the application (corner case, but important nonetheless).
    NXOAuth2Account *cachedAccount;
    BOOL found = NO;
    NSArray *existingAccounts = [[NXOAuth2AccountStore sharedStore] accounts];
    for (NXOAuth2Account *account in existingAccounts) {
        NSLog(account.accountType);
        if ([account.accountType isEqualToString:_applicationName]) {
            cachedAccount = account;
            found = YES;
            break;
        }
    }
    if (found) {
        _nxAccount = cachedAccount;
        _accessToken = _nxAccount.accessToken.accessToken;
        _verified = YES;
    } else {
        _verified = NO;
    }
}

/* NB: called in 'verify' function, before credentials are requested. */
- (void)setupWithSuccessBlock:(NotifiedBlock)successBlock
          AccountRemovedBlock:(NotifiedBlock)accountRemovedBlock
                   ErrorBlock:(void (^)(NSError *error))errorBlock
{
    if (!(_clientID && _clientSecret && _redirectURL && _applicationName)) {
        NSLog(@"You need to set clientID, clientSecret, redirectURL, and applicationName before you can complete setup.");
        _configured = NO;
        return;
    }
    [[NXOAuth2AccountStore sharedStore] setClientID:_clientID
                                             secret:_clientSecret
//                                   authorizationURL:[NSURL URLWithString:@"http://localhost:5000/oauth/authorize"]
//                                           tokenURL:[NSURL URLWithString:@"http://localhost:5000/oauth/token"]
                                   authorizationURL:[NSURL URLWithString:@"https://www.staging.identity.com/oauth/authorize"]
                                           tokenURL:[NSURL URLWithString:@"https://www.staging.identity.com/oauth/token"]
                                        redirectURL:[NSURL URLWithString:_redirectURL]
                                     forAccountType:_applicationName];

    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:NXOAuth2AccountStoreAccountsDidChangeNotification
                                                  object:[NXOAuth2AccountStore sharedStore]];
    [[NSNotificationCenter defaultCenter] addObserverForName:NXOAuth2AccountStoreAccountsDidChangeNotification
                                                      object:[NXOAuth2AccountStore sharedStore]
                                                       queue:nil
                                                  usingBlock:^(NSNotification *aNotification){
                                                      // NB: This block is untested. Logic is plain enough to not be worth refactoring for testability.
                                                      if (aNotification.userInfo){
                                                          NXOAuth2Account *returnedAccount = aNotification.userInfo[NXOAuth2AccountStoreNewAccountUserInfoKey];
                                                          if (returnedAccount.accessToken.accessToken != nil) {
                                                              _nxAccount = returnedAccount;
                                                              _accessToken = _nxAccount.accessToken.accessToken;
                                                              _verified = YES;
                                                              UIViewController *sVC = [[UIApplication sharedApplication].keyWindow.rootViewController presentedViewController];
                                                              if (aNotification.userInfo) {
                                                                  [sVC dismissViewControllerAnimated:YES completion:nil];
                                                              }
                                                              successBlock(aNotification);
                                                          }
                                                      } else {
                                                          accountRemovedBlock(aNotification);
                                                      }
                                                  }];
    
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:NXOAuth2AccountStoreDidFailToRequestAccessNotification
                                                  object:[NXOAuth2AccountStore sharedStore]];
    [[NSNotificationCenter defaultCenter] addObserverForName:NXOAuth2AccountStoreDidFailToRequestAccessNotification
                                                      object:[NXOAuth2AccountStore sharedStore]
                                                       queue:nil
                                                  usingBlock:^(NSNotification *aNotification){
                                                      _verified = NO;
                                                      NSError *error = [aNotification.userInfo objectForKey:NXOAuth2AccountStoreErrorKey];
                                                      errorBlock(error);
                                                  }];
    
    _configured = YES;
}

- (void)requestAccessWithScopes:(NSArray *)scopes
{
    if (self.verified) return;
    if (scopes.count == 0) return;
    for (NSObject *value in scopes) {
        if (![value isKindOfClass:[NSString class]]) {
            NSLog(@"Scopes must be an NSArray of NSString* values.");
            return;
        }
    }

    NSString *scopesString = [[scopes valueForKey:@"description"] componentsJoinedByString:@"+"];
    [[NXOAuth2AccountStore sharedStore] requestAccessToAccountWithType:_applicationName
                                   withPreparedAuthorizationURLHandler:^(NSURL *preparedURL){
                                       _state = arc4random_uniform(999999);
                                       NSURL *urlWithStateAndScopes = [NSURL URLWithString:[NSString stringWithFormat:@"%@&scope=%@&state=%d",
                                                    [preparedURL absoluteString], scopesString, _state]];
                                       SFSafariViewController *sVC = [[SFSafariViewController alloc] initWithURL:urlWithStateAndScopes];
                                       UIViewController *topVC =  [UIApplication sharedApplication].keyWindow.rootViewController;
                                       while (topVC.presentedViewController) {
                                           topVC = topVC.presentedViewController;
                                       }
                                       sVC.delegate = topVC;
                                       [topVC presentViewController:sVC animated:YES completion:nil];
                                    }];
}

- (void)requestUserInfoWithHandler:(void (^)(NSURLResponse *response, NSData *responseData, NSError *error))handler
{
    if (self.nxAccount == nil) {
        NSLog(@"Could not find a valid account. Be sure to configure fields here.");
        return;
        
    }
    if (self.verified != YES) {
        NSLog(@"IDApi is not verified");
        return;
    }
    if (self.nxAccount.accessToken == nil) {
        NSLog(@"No access token.");
        return;
    }
    NSLog(@"account: %@", _nxAccount.description);
    [NXOAuth2Request performMethod:@"GET"
                        onResource:[NSURL URLWithString:@"http://localhost:5000/oauth/me"]
                   usingParameters:@{@"access_token": _accessToken, @"client_id": _clientID}
                       withAccount:_nxAccount
               sendProgressHandler:nil
                   responseHandler:handler];
}

- (void)removeAccountwithBrowserCookie:(BOOL)browserCookie
{
    // TODO: For whatever reason, this doesn't seem to retrieve any cookies in SFSafariViewController
    if (browserCookie) {
//        NSLog(@"...cookies");
//        NSLog(@"Cookies: %@", [[NSHTTPCookieStorage sharedHTTPCookieStorage] cookies]);
        for(NSHTTPCookie *cookie in [[NSHTTPCookieStorage sharedHTTPCookieStorage] cookies]) {
//            NSLog(@"cookie domain: %@", [cookie domain]);
            if([[cookie domain] isEqualToString:@"localhost:5000"]) {
                [[NSHTTPCookieStorage sharedHTTPCookieStorage] deleteCookie:cookie];
            }
        }
        [[NSUserDefaults standardUserDefaults] synchronize];
    }
    [[NXOAuth2AccountStore sharedStore] removeAccount:_nxAccount];
    _nxAccount = nil;
    self.verified = NO;
}

@end
