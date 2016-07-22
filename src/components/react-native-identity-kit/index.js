import React, { PropTypes } from 'react'
import ReactNative, {
  View,
  NativeModules,
  requireNativeComponent,
} from 'react-native'

const RNIDButton = requireNativeComponent('RNIDButton', IDButton)

const defaultStyles = {
  // flex: 1,
  height: 63,
}

class IDButton extends React.Component {
  static propTypes = {
    style: View.propTypes.style,
    clientID: PropTypes.string.isRequired,
    clientSecret: PropTypes.string.isRequired,
    redirectURL: PropTypes.string.isRequired,
    applicationName: PropTypes.string.isRequired,
    scopes: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  static defaultProps = {
    aProp: '',
  };

  componentDidMount() {
    NativeModules.RNIDButtonManager.initialize(ReactNative.findNodeHandle(this))
  }

  render() {
    return (
      <RNIDButton
        ref="idButton"
        style={[defaultStyles, this.props.style]}
        backgroundColor={this.props.style.backgroundColor || 'red'}
        clientID={this.props.clientID}
        clientSecret={this.props.clientSecret}
        redirectURL={this.props.redirectURL}
        applicationName={this.props.applicationName}
        scopes={this.props.scopes}
      />
    )
  }
}

// Need to add this line to make install available through RNPM
// NativeModules.RNIDButton // eslint-disable-line no-unused-expressions

export default IDButton
