import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './Card.styles'

const Card = ({ data }) => (
  <View style={styles.container}>
    <Image
      source={require('../../media/no-user-image.gif')}
      style={[styles.image, styles.noShadow]}
    />
    <View style={styles.body}>
      <Text style={styles.header}>{data.get('header')}</Text>
      <View style={styles.organization}>
        <Text>Organization: {data.get('organization') || 'Unlisted'}</Text>
      </View>
      <View style={styles.topBreak}>
        <Text>Location: {data.get('location') || 'Unlisted'}</Text>
      </View>
      <View style={styles.topBreak}>
        <Text>{data.get('shortDesc') ||
          'No further description is provided for this listing.'}</Text>
      </View>
    </View>
  </View>
)
Card.propTypes = {
  data: PropTypes.object,
}

export default Card
