# Impart

*Impart* is a React Native application that demonstrates use of IdentityKit, the iOS SDK for the [identity.com](https://www.identity.com) verification flow. *Impart* is based on the Tinder-swipe model, allowing you to browse and sign up for volunteer opportunities in your area.

## Getting Started

Running a devlopment environment for Impart requires the following softwares installed on your Mac:
 - [XCode 7+](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
 - [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
 - [Docker for Mac](https://docs.docker.com/engine/installation/mac/)
 - [Docker Compose](https://docs.docker.com/compose/install/)

### Running the server

The app reads data from a [Parse server](https://github.com/ParsePlatform/parse-server) that you can run locally through Docker. Simply run the following:
```bash
cd ParseServer
sh run.sh
```

To initialize the server with the example cards, run the following: 
```bash
sh initialize.sh
```

To view the Parse dashboard, go to [localhost:4040](http://localhost:4040). (NB: it might take a couple of seconds for the container to start up after you have run the command). You can login with the username "admin" and the password "super_secure_password" when prompted.

Note that the app is configured to read remotely hosted image URLs that are sent with the rest of the card information from the server. However, the example card images are bundled with the app, in the `src/offline` folder. The app maps these local filenames (those prefixed with `local::` on the server) to the images bundled in the app through the `src/offline/imageMap.js` object.

### Running on iPhone Simulator
Install the dependencies:
```bash
npm i
```
In a separate terminal window, run the React Native package manager:
```bash
npm start
```
Run the application though the simulator:
```
npm run debug:ios:6+
``` 

## Configuring with ID SDK

This example project uses a [RN Native Module](https://facebook.github.io/react-native/docs/native-modules-ios.html) to bridge IdentityKit to the Javascript thread in which the application logic is running.

The configuration for the IDButton that is being used can be found in `src/components/YesDetail/YesDetail.js`, in the `IDButton` component.

The component takes the following props:

| Prop Name | Type | Description | Required |
| --------- | ---- | ----------- | -------- |
| buttonText | String | Text displayed on the button. The default is "Verify". |  |
| clientID | String | The client ID of your application on identity.com. | √ |
| clientSecret | String | The client secret of your application on identity.com. | √ |
| redirectURL | String | The redirect URL of your application on identity.com. The URL for the example app is set up to be `impartapp://oidc/cb`. If you want to use a different URL scheme, make sure that you configure the custom URL scheme in the `info.plist` 'URL types'->'URL schemes' array in the XCode project. | √ |
| applicationName | String | IdentityKit uses the applicationName as a key to cache verified tokens. It is also a required paramter of the control flow. The default is "MobileSDK". | √ |
| scopes | Array <String> | The scopes that you want the user to verify. The default is the single email scope. | √ |
| backgroundColor | String | The button's background color as a HEX string. Default is the ID green. | |
| styles | View.propTypes.style | Custom styles that you want to pass down to the button to override the default configuration. | |

#### Native Bridge

The code that bridges the native IdentityKit can be found in `ios/RNIDButtonManager.{h|m}`. This bridged module is then wrapped in an easy-to-use component in `src/components/react-native-identity-kit`.

## 
