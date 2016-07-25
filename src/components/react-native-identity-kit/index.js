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
  };

  static defaultProps = {
    style: { height: 63 },
    backgroundColor: 'mediumseagreen',
  };

  componentDidMount() {
    NativeModules.RNIDButtonManager.initialize(ReactNative.findNodeHandle(this))
  }

  render() {
    return (
      <RNIDButton
        ref="idButton"
        style={this.props.style}
        backgroundColor={this.props.backgroundColor}
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

// Need to add this line to make install available through RNPM
// NativeModules.RNIDButton // eslint-disable-line no-unused-expressions

export default IDButton
