import React, { PropTypes } from 'react'
import ReactNative, {
  View,
  NativeModules,
  requireNativeComponent,
  NativeAppEventEmitter
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
    onUnverified: PropTypes.func
  };

  static defaultProps = {
    style: {
      height: 63,
      backgroundColor: 'purple'
    },
    onAccessToken: () => ({}),
    onUserInfo: () => ({}),
    onError: () => ({}),
    onCachedToken: () => ({}),
    onVerified: () => ({}),
    onUnverified: () => ({})
  };

  constructor (props) {
    super(props)
    this.s1 = null
    this.s2 = null
    this.s3 = null
    this.s4 = null
    this.s5 = null
    this.s6 = null
  }

  componentDidMount () {
    NativeModules.RNIDButtonManager.initialize(ReactNative.findNodeHandle(this))
    this.s1 = NativeAppEventEmitter.addListener('didReceiveUserInfo', body => {
      this.props.onUserInfo(body)
    })

    this.s2 = NativeAppEventEmitter.addListener('didReceiveAccessToken', body => {
      this.props.onAccessToken(body.token)
    })

    this.s3 = NativeAppEventEmitter.addListener('didRecieveError', body => {
      this.props.onError(body)
    })

    this.s4 = NativeAppEventEmitter.addListener('hasCachedToken', body => {
      this.props.onCachedToken(body)
    })

    this.s5 = NativeAppEventEmitter.addListener('didBecomeVerified', () => {
      this.props.onVerified()
    })

    this.s6 = NativeAppEventEmitter.addListener('didBecomeUnverified', () => {
      this.props.onUnverified()
    })
  }

  componentWillUnmount () {
    this.s1.remove()
    this.s2.remove()
    this.s3.remove()
    this.s4.remove()
    this.s5.remove()
    this.s6.remove()
  }

  render () {
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
