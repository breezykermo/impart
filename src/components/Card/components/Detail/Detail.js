import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './Detail.styles'

const Detail = ({ icon, text }) => (
  <View style={styles.container}>
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
)
Detail.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Detail
