import React, { PropTypes } from 'react'
import {
  View,
  requireNativeComponent,
} from 'react-native'

const RNIDButton = requireNativeComponent('RNIDButton', IDButton)

class IDButton extends React.Component {
  static propTypes = {
    style: View.propTypes.style,
  };

  static defaultProps = {
    aProp: '',
  };

  render() {
    return (
      <RNIDButton
        style={this.props.style}
        backgroundColor={this.props.style.backgroundColor || 'red'}
      />
    )
  }
}

// Need to add this line to make install available through RNPM
// NativeModules.RNIDButton // eslint-disable-line no-unused-expressions

export default IDButton
