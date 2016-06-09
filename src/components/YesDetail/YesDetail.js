import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './YesDetail.styles'

const YesDetail = props => (
  <View style={styles.container}>
    <Text>{props.card.header}</Text>
  </View>
)
YesDetail.propTypes = {
  card: PropTypes.shape({
    header: PropTypes.string,
    organization: PropTypes.string,
    location: PropTypes.string,
    body: PropTypes.string,
  }),
}

export default YesDetail
