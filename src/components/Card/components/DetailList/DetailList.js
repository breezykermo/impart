import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'

const DetailList = () => (
  <View>
    <Text>DetailList</Text>
  </View>
)
DetailList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DetailList
