import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './Card.styles'

const Card = props => (
  <View style={[styles.card, { backgroundColor: props.backgroundColor }]}>
    <Text>{props.text}</Text>
  </View>
)
Card.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Card
