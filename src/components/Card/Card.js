import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import DetailList from '../DetailList'
import styles from './Card.styles'
import { getImageObj } from '../../util/react'

const Card = ({ data }) => (
  <View style={styles.container}>
    <Image
      // resizeMode="contain"
      style={styles.image}
      source={getImageObj(data.get('pictureUrl'))}
    >
      {data.get('header') ? (
        <Text style={styles.headerText}>{data.get('header')}</Text>
      ) : null}
    </Image>
    <View>
      <DetailList data={data} />
    </View>
  </View>
)
Card.propTypes = {
  data: PropTypes.object,
}

export default Card
