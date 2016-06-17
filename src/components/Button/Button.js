import React, { PropTypes } from 'react'
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native'
import styles from './Button.styles'

class Button extends React.Component {
  static propTypes: {
    onPress: PropTypes.func.isRequired,
    style: View.propTypes.style,
  }

  constructor(props) {
    super(props)
    this._onShowUnderlay.bind(this)
    this._onHideUnderlay.bind(this)
  }

  state = {
    pressed: false,
  }

  _onShowUnderlay() {
    this.setState({
      pressed: true,
    })
  }

  _onHideUnderlay() {
    this.setState({
      pressed: false,
    })
  }

  render() {
    const { onPress, text } = this.props
    const { pressed } = this.state

    return (
      <View style={pressed ? styles.containerActive : styles.container}>
        <TouchableHighlight
          activeOpacity={1}
          onHideUnderlay={this._onHideUnderlay}
          onShowUnderlay={this._onShowUnderlay}
          onPress={onPress}
        >
          <Text style={pressed ? styles.textActive : styles.text}>{text}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
}

export default Button
