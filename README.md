# Impart

*Impart* is a React Native application that demonstrates use of IdentityKit, the iOS SDK for the [identity.com](https://www.identity.com) verification flow. *Impart* is based on the Tinder-swipe model, allowing you to browse and sign up for available volunteer opportunities.

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

#### Running the server with [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

Docker Toolbox runs Docker in a virtual machine rather than locally on your Mac, and so to run this application with it you have to make a couple of adjustments to the startup script. Firstly, make sure that the docker environment variables are available in your path by running:
```bash
eval $(docker-machine env default)
```
Run `docker ps` to confirm that the terminal has the docker environment variables.

Open `src/ParseServer/run.sh`, and replace 'localhost' with '$(docker-machine ip default)'. Docker Toolbox runs docker containers in a virtual machine, and so the application runs on a different IP address than your computer's local.

Navigate to the 'ParseSever' directory in terminal and run:
```bash
sh run.sh
sh initialize.sh
```

The Parse dashboard should now be available at port 4040 of the IP address of the virtual machine that is running Docker. You can discover this by running `docker-machine ip default` in a terminal shell.

#### Offline Mode

Impart is also set up to run without a server, for in app demos. The configuration and files are in `src/offline`. Offline mode will run if the `__DEV__` variable is not defined (i.e., whenever React Native is not running on a simulator in development). See `src/parse.js` for more details.

To load the cards in the current server to the app's offline state, run:
```bash
npm run dumpFromParse
```
This will make a request to the server, and store the received data `src/offline/data/cards.js`, which can be readily loaded in offline mode through the logic in `src/parse.js`.

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

This example project uses a [Native Module](https://facebook.github.io/react-native/docs/native-modules-ios.html) to bridge IdentityKit to the Javascript thread in which the application logic is running.

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

#### Running the SDK with identity.com 

The SDK is configured to open to [http://localhost:5000]() for development purposes, as the [identity.com development configuration](https://github.com/identity-dev/identity) runs at this port. If you want to change the SDK to read from either the staging or production server, open `ios/Impart/IdentityKit/Classes/IDApi.m`, and comment out the following lines:

```objective-c
authorizationURL:[NSURL URLWithString:@"http://localhost:5000/oauth/authorize"]
tokenURL:[NSURL URLWithString:@"http://localhost:5000/oauth/token"]
```

Then uncomment either the lines that point to the staging server:

```objective-c
authorizationURL:[NSURL URLWithString:@"https://staging.identity.com/oauth/authorize"]
tokenURL:[NSURL URLWithString:@"https://staging.identity.com//oauth/token"]
```

or the lines that point to the production server:

```objective-c
authorizationURL:[NSURL URLWithString:@"https://www.identity.com/oauth/authorize"]
tokenURL:[NSURL URLWithString:@"https://www.identity.com//oauth/token"]
```

You must also replace the two other instance of 'localhost:5000' in this same file with the appropraite base URL for staging or production.

#### Native Bridge

The code that bridges the native IdentityKit can be found in `ios/RNIDButtonManager.{h|m}`. This bridged module is then wrapped in an easy-to-use component in `src/components/react-native-identity-kit`.

## Structure of React Native source code
The majority of the React Native source code is in the `src` directory. This directory has the following structure.
    
├ **api**         _____interface with local storage and the Parse server.     
├ **common**      _____shared between components, constants etc.     
├ **components**  _____components, each in its own folder     
├ **containers**  _____wrapper containers that manage components     
├ **media**       _____icons and other app related media.     
├ **navigation**  _____navigation config. The navigation is just a simple configured reducer.      
├ **offline**     _____resources and scripts for running the app in offline mode.     
├ **reducers**    _____redux reducers that manage the application state.     
├ **store**       _____redux store, middleware configuration.     
├ **util**        _____general util functions.     
├ **parse.js**    _____configuration and initialization for the Parse server.     
├ **entry.js**    _____app entry point.

## Credits

Developed Lachlan Kermode 2016. Hit up lachlankermode@live.com if you have any questions, queries or concerns. 

