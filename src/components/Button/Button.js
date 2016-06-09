import React, { PropTypes } from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'
import styles from './Button.styles'

const Button = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text>{props.children}</Text>
  </TouchableOpacity>
)
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string,
}

export default Button
