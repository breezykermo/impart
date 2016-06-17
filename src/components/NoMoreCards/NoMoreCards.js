import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import Button from '../Button'
import { NO_MORE_OPPORTUNITIES } from '../../common/i18n'

import styles from './NoMoreCards.styles'

const NoMoreCards = props => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Image
        style={styles.comeBackImage}
        source={require('../../media/come-back.png')}
      />
    </View>
    <Text style={styles.text}>{NO_MORE_OPPORTUNITIES}</Text>
    <Button
      onPress={() => console.log('pressed')}
      text="Press me!"
    />
  </View>
)
NoMoreCards.propTypes = {
  refreshCards: PropTypes.func.isRequired,
}

export default NoMoreCards
