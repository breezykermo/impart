import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import Button from '../Button'
import i18n from '../../common/i18n'

import styles from './NoMoreCards.styles'

const NoMoreCards = props => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Image
        style={styles.comeBackImage}
        source={require('../../media/come-back.png')}
      />
    </View>
    <Text style={styles.text}>{i18n.noMoreOpportunites}</Text>
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => console.log('pressed')}
        text="Press me!"
      />
    </View>
  </View>
)
NoMoreCards.propTypes = {
  refreshCards: PropTypes.func.isRequired,
}

export default NoMoreCards
