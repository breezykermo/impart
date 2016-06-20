import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import DetailList from './components/DetailList'
import styles from './Card.styles'
import { formatUrl } from '../../util/react'

const Card = ({ data }) => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.image}
      source={formatUrl(data.get('pictureUrl')) || require('../../media/no-user-image.gif')}
    >
      {data.get('header') ? (
        <Text style={styles.headerText}>{data.get('header')}</Text>
      ) : null}
    </Image>
    <View style={styles.body}>
      <DetailList data={data} />
    </View>
  </View>
)
Card.propTypes = {
  data: PropTypes.object,
}

export default Card
