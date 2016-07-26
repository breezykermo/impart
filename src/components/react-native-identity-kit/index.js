import React, { PropTypes } from 'react'
import ReactNative, {
  View,
  NativeModules,
  requireNativeComponent,
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
    onAccessToken: PropTypes.func,
    onUserInfo: PropTypes.func,
  };

  static defaultProps = {
    style: {
      height: 63,
      backgroundColor: 'purple',
    },
  };

  constructor(props) {
    super(props)
    this._onAccessToken = this._onAccessToken.bind(this)
    this._onUserInfo = this._onUserInfo.bind(this)
  }

  componentDidMount() {
    NativeModules.RNIDButtonManager.initialize(ReactNative.findNodeHandle(this))
  }

  _onAccessToken(event) {
    console.log(event)
    if (!this.props.onAccessToken) return
    this.props.onAccessToken(event.nativeEvent.token)
  }

  _onUserInfo(event) {
    console.log(event)
    if (!this.props.onUserInfo) return
    this.props.onUserInfo(event.nativeEvent.scopes)
  }

  render() {
    return (
      <RNIDButton
        onUserInfo={this._onUserInfo}
        onAccessToken={this._onAccessToken}
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
