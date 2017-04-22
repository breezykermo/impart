import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './Detail.styles'
import { returnIconAsImage } from '../../util/media'

const Detail = ({ icon, text, style }) => (
  <View style={[styles.container, style || {}]}>
    <View style={styles.iconContainer}>
      {returnIconAsImage(icon, styles.icon)}
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </View>
)
Detail.propTypes = {
  style: View.propTypes.style,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Detail
