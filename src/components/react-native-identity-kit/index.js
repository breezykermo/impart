import React, { PropTypes } from 'react'
import ReactNative, {
  View,
  NativeModules,
  requireNativeComponent,
  NativeAppEventEmitter,
} from 'react-native'

const RNIDButton = requireNativeComponent('RNIDButton', IDButton)

class IDButton extends React.Component {
  static propTypes = {
    style: View.propTypes.style,
    backgroundColor: PropTypes.string,
    buttonText: PropTypes.string,
    clientID: PropTypes.string.isRequired,
    clientSecret: PropTypes.string.isRequired,
    redirectURL: PropTypes.string.isRequired,
    applicationName: PropTypes.string.isRequired,
    scopes: PropTypes.arrayOf(PropTypes.string).isRequired,
    /* Lifecycle events */
    onAccessToken: PropTypes.func,
    onUserInfo: PropTypes.func,
    onError: PropTypes.func,
    onCachedToken: PropTypes.func,
    onVerified: PropTypes.func,
    onUnverified: PropTypes.func,
  };

  static defaultProps = {
    style: {
      height: 63,
      backgroundColor: 'purple',
    },
    onAccessToken: () => ({}),
    onUserInfo: () => ({}),
    onError: () => ({}),
    onCachedToken: () => ({}),
    onVerified: () => ({}),
    onUnverified: () => ({}),
  };

  constructor(props) {
    super(props)

    NativeAppEventEmitter.addListener('didReceiveUserInfo', body => {
      this.props.onUserInfo(body)
    })

    NativeAppEventEmitter.addListener('didReceiveAccessToken', body => {
      this.props.onAccessToken(body)
    })

    NativeAppEventEmitter.addListener('didRecieveError', body => {
      this.props.onError(body)
    })

    NativeAppEventEmitter.addListener('hasCachedToken', body => {
      this.props.onCachedToken(body)
    })

    NativeAppEventEmitter.addListener('didBecomeVerified', () => {
      this.props.onVerified()
    })

    NativeAppEventEmitter.addListener('didBecomeUnverified', () => {
      this.props.onUnverified()
    })
  }

  componentDidMount() {
    NativeModules.RNIDButtonManager.initialize(ReactNative.findNodeHandle(this))
  }

  render() {
    return (
      <RNIDButton
        style={this.props.style}
        buttonText={this.props.buttonText}
        clientID={this.props.clientID}
        clientSecret={this.props.clientSecret}
        redirectURL={this.props.redirectURL}
        applicationName={this.props.applicationName}
        scopes={this.props.scopes}
      />
    )
  }
}

export default IDButton
