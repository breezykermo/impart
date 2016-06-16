import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import DetailList from './components/DetailList'
import styles from './Card.styles'

const Card = ({ data }) => (
  <View style={styles.container}>
    <Image
      source={require('../../media/no-user-image.gif')}
      style={[styles.image, styles.noShadow]}
    />
    <View style={styles.body}>
      <DetailList data={data} />
    </View>
  </View>
)
Card.propTypes = {
  data: PropTypes.object,
}

export default Card
