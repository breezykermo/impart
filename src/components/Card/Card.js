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
    <Image source={require('../../media/no-user-image.gif')} style={styles.image}>
      <Text>{props.text}</Text>
    </Image>
    <View style={styles.body}>

    </View>
  </View>
)
Card.propTypes = {
  header: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Card
