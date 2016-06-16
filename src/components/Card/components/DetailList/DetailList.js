import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './DetailList.styles'

const DetailList = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{data.get('organization')}</Text>
  </View>
)
DetailList.propTypes = {
  /** An immutable Parse object that represents the card **/
  data: PropTypes.object.isRequired,
}

export default DetailList
