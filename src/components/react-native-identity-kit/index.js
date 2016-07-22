import React, { PropTypes } from 'react'
import {
  requireNativeComponent,
} from 'react-native'

const RNIDButton = requireNativeComponent('RNIDButton', IDButton)

class IDButton extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  };

  static defaultProps = {
    aProp: '',
  };

  render() {
    return (
      <RNIDButton
        height={this.props.height}
        width={this.props.width}
      />
    )
  }
}

// Need to add this line to make install available through RNPM
// NativeModules.RNIDButton // eslint-disable-line no-unused-expressions

export default IDButton
