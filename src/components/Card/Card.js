import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './Card.styles'

const Card = props => (
  <View style={styles.container}>
    <Text style={styles.header}>{props.header}</Text>
    <Image source={require('../../media/no-user-image.gif')} style={styles.image} />
    <View style={styles.body}>
      <View style={styles.organization}>
        <Text>Organization: {props.organization || 'Unlisted'}</Text>
      </View>
      <View style={styles.topBreak}>
        <Text>Location: {props.location || 'Unlisted'}</Text>
      </View>
      <View style={styles.topBreak}>
        <Text>{props.short || 'No further description is provided for this listing.'}</Text>
      </View>
    </View>
  </View>
)
Card.propTypes = {
  header: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  organization: PropTypes.string,
  location: PropTypes.string,
  short: PropTypes.string,
}

export default Card
