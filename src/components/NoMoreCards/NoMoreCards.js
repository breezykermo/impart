import React, { PropTypes } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import styles from './NoMoreCards.styles'

const NoMoreCards = props => (
  <View style={styles.container}>
    <Text style={styles.text}>
      There are no mord cards. I hope you helped out one charity at least.
    </Text>
    <TouchableOpacity onPress={props.refreshCards} style={styles.refreshButton}>
      <Text>Click me to restart</Text>
    </TouchableOpacity>
  </View>
)
NoMoreCards.propTypes = {
  refreshCards: PropTypes.func.isRequired,
}

export default NoMoreCards
