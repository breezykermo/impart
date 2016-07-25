////
////  IDButton.m
////
////
////  Created by Lachie Kermode on 6/3/16.
//
//@import UIKit;
//#import "IDButton.h"
//
//#define BUTTON_PADDING_VERTICAL 5.0f
//#define BUTTON_PADDING_HORIZONTAL 30.0f
//
//// Colors from iD StyleGuide, @ http://identity-dev.github.io/styleguide/docs/
//// TODO: Change this, memory intensive, just store them as variables...?
//#define TEAL_HOVER [UIColor colorWithRed:39.0f/255.0f green:170.0f/255.0f blue:174.0f/255.0f alpha:1.0f]
//#define TEAL [UIColor colorWithRed:44.0f/255.0f green:190.0f/255.0f blue:195.0f/255.0f alpha:1.0f]
//
//@interface IDButton ()
//
//@end
//
//@implementation IDButton
//
//- (instancetype)initWithFrame:(CGRect)frame {
//    if (self = [super initWithFrame:frame]) {
//        [self configureButton];
//    }
//    return self;
//}
//
//- (void)configureClientId:(NSString *)clientID
//             ClientSecret:(NSString *)clientSecret
//              RedirectURL:(NSString *)redirectURL
//          ApplicationName:(NSString *)applicationName
//{
//  _iDApi = [IDApi sharedInstance];
//  _iDApi.clientID = clientID;
//  _iDApi.clientSecret = clientSecret;
//  _iDApi.redirectURL = redirectURL;
//  _iDApi.applicationName = applicationName;
//  /* establish transparent pointers to _iDApi */
//  _clientID = _iDApi.clientID;
//  _clientSecret = _iDApi.clientSecret;
//  _redirectURL = _iDApi.redirectURL;
//  _applicationName = _iDApi.applicationName;
//  /* configure with handlers (calling custom handlers if specified) */
//  NotifiedBlock defaultHandler = ^(NSNotification *aNotification){};
//  NotifiedBlock successHandler = self.successHandler ? self.successHandler : defaultHandler;
//  NotifiedBlock accountRemovedHandler = self.accountRemovedHandler ? self.accountRemovedHandler : defaultHandler;
//  void (^errorHandler)(NSError*) = self.errorHandler ? self.errorHandler : ^void(NSError*error){};
//  [_iDApi setupWithSuccessBlock:^(NSNotification *aNotification){
//                                      NSLog(@"Success, received new account");
//                                      successHandler(aNotification);
//                                      [self _setVerified];
//                                  }
//            AccountRemovedBlock:^(NSNotification *aNotification){
//                                      NSLog(@"Success, removed account");
//                                      accountRemovedHandler(aNotification);
//                                      [self _setUnverified];
//                                  }
//                      ErrorBlock:^(NSError *error){
//                                      NSLog(@"Error! %@", error.localizedDescription);
//                                      errorHandler(error);
//                                      [self _setUnverified];
//                                  }];
//  /* Check OAuth store for cached account */
//  [_iDApi checkVerified];
//  if (_iDApi.verified) {
//      [self _setVerified];
//  }
//}
//
//# pragma mark - Helpers
//
//// Taken from http://stackoverflow.com/questions/20300766/how-to-change-the-highlighted-color-of-a-uibutton
//- (UIImage *)imageWithColor:(UIColor *)color {
//    CGRect rect = CGRectMake(0.0f, 0.0f, 1.0f, 1.0f);
//    UIGraphicsBeginImageContext(rect.size);
//    CGContextRef context = UIGraphicsGetCurrentContext();
//    
//    CGContextSetFillColorWithColor(context, [color CGColor]);
//    CGContextFillRect(context, rect);
//    
//    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
//    UIGraphicsEndImageContext();
//    
//    return image;
//}
//
//- (UIColor *)darkerColorForColor:(UIColor *)c
//{
//  CGFloat r, g, b, a;
//  if ([c getRed:&r green:&g blue:&b alpha:&a])
//    return [UIColor colorWithRed:MAX(r - 0.2, 0.0)
//                           green:MAX(g - 0.2, 0.0)
//                            blue:MAX(b - 0.2, 0.0)
//                           alpha:a];
//  return nil;
//}
//
//#pragma mark - Defaults (Class methods)
//
//- (UIColor *)defaultBackgroundColor
//{
//    return TEAL;
//}
//
//- (UIColor *)defaultHighlightedColor
//{
//    return TEAL_HOVER;
//}
//
//- (UIColor *)defaultSelectedColor
//{
//    return TEAL_HOVER;
//}
//- (UIFont *)defaultFont
//{
//    return [UIFont systemFontOfSize:16];
//}
//
//#pragma mark - Configuration
//
//- (void)configureButton
//{
//    NSString *buttonTitle = @"Verify";
//    [self _configureButtonWithTitle:buttonTitle
//            backgroundColor:[self defaultBackgroundColor]
//           highlightedColor:[self defaultHighlightedColor]];
//    self.clientID = nil;
//    self.clientSecret = nil;
//    self.redirectURL = nil;
//    self.applicationName = nil;
//    self.scopes = nil;
//}
//
//- (void)_configureButtonWithTitle:(NSString *)title
//         backgroundColor:(UIColor *)backgroundColor
//        highlightedColor:(UIColor *)highlightedColor
//{
//    UIImage *verifiedImage = [self idkit_imageNamed:@"verified_icon.png"];
//
//    if (title) {
//        [self setTitle:title forState:UIControlStateNormal];
//        [self setTitle:@"" forState:UIControlStateDisabled];
//    }
//    if (backgroundColor) {
//        [self setBackgroundImage:[self imageWithColor:[self defaultBackgroundColor]] forState:UIControlStateNormal];
//        [self setBackgroundImage:verifiedImage forState:UIControlStateDisabled];
//    }
//    if (highlightedColor) {
//        [self setBackgroundImage:[self imageWithColor:[self defaultHighlightedColor]] forState:UIControlStateHighlighted];
//        [self setBackgroundImage:[self imageWithColor:[UIColor clearColor]] forState:UIControlStateDisabled];
//    }
//    self.layer.cornerRadius = 2;
//    self.layer.masksToBounds = YES;
//    
//    [self addTarget:self action:@selector(didClick) forControlEvents:UIControlEventTouchUpInside];
//    /* Always unverified by default: IDApi checkVerified method will check cache and setVerified if appropriate. */
//    [self _setUnverified];
//}
//
//- (void)setTitleColor:(UIColor *)color forState:(UIControlState)state
//{
//  [super setTitleColor:color forState:state];
//}
//
//- (void)setBackgroundColor:(UIColor *)backgroundColor
//{
//  [self setBackgroundImage:[self imageWithColor:[UIColor clearColor]] forState:UIControlStateNormal];
//  [super setBackgroundColor:backgroundColor];
//  [self setBackgroundImage:[self imageWithColor:[self darkerColorForColor:backgroundColor]] forState:UIControlStateHighlighted];
//  [self setBackgroundImage:[self imageWithColor:[self darkerColorForColor:backgroundColor]] forState:UIControlStateDisabled];
//}
//
//- (UIImage *)idkit_imageNamed: (NSString *)name
//{
//    // TODO: fix this function to return images bundled with pod, rather than from main bundle.
//    UIImage *baseImage = [UIImage imageNamed:name];
//    return baseImage;
//}
//
//- (void)_decorateWithLogo
//{
//    UIImage *notVerifiedImage = [self idkit_imageNamed:@"id_members_only.png"];
//    [self setImage:notVerifiedImage forState:UIControlStateNormal];
//    // TODO: make these relative to height & width
//}
//
//- (void)_setUnverified
//{
//    UIImage *notVerifiedImage = [self idkit_imageNamed:@"id_members_only.png"];
//    [self setImageEdgeInsets:UIEdgeInsetsMake(8, 3, 8, 0)];
//    [self setContentEdgeInsets:UIEdgeInsetsMake(0, 0, 0, 15)];
//    self.imageView.contentMode = UIViewContentModeScaleAspectFit;
//    [self setImage:notVerifiedImage forState:UIControlStateNormal];
//    self.enabled = YES;
//}
//
//- (void)_setVerified
//{
//    UIImage *verifiedImage = [self idkit_imageNamed:@"verified_icon.png"];
//    [self setTitle:@"" forState:UIControlStateDisabled];
//    [self setImage:nil forState:UIControlStateNormal];
//    [self setBackgroundImage:verifiedImage forState:UIControlStateDisabled];
//    self.enabled = NO;
//}
//
//- (void)didClick {
//    if (!(self.clientID && self.clientSecret && self.redirectURL && self.applicationName)) {
//        NSLog(@"<IdentityKit/IDButton.m> You need to set clientID, clientSecret, redirectURL and applicationName");
//        // TODO: throw exception here? [NSException raise:@"Invalid foo value" format:@"foo of %d is invalid", foo];
//        return;
//        
//    }
//    if (!self.scopes) {
//        NSLog(@"<IdentityKit/IDButton.m> You need to configure scopes on the button before you can make a request.");
//        // TODO: throw exception here? [NSException raise:@"Invalid foo value" format:@"foo of %d is invalid", foo];
//        return;
//    }
//    
//    [_iDApi requestAccessWithScopes:_scopes];
//}
//
//- (void)removeAccessToken
//{
//    /* TODO: delete token at API, using delete route (currently undocumented 7.4.2016) */
////    NSLog(@"Accounts: %@", [[NXOAuth2AccountStore sharedStore] accounts].description);
//    [self.iDApi removeAccountwithBrowserCookie:YES];
//    [self _setUnverified];
//}
//
//- (void)requestUserInfoWithHandler:(void (^)(NSURLResponse *response, NSData *responseData, NSError *error))handler
//{
//    if (_iDApi.accessToken != nil) {
//        [_iDApi requestUserInfoWithHandler:handler];
//    } else {
//        NSLog(@"<IdentityKit/IDButton.m> Could not find accessToken, make sure you retrieve it first.");
//        return;
//    }
//}
//
//@end
