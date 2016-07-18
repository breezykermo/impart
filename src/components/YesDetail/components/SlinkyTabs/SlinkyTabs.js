import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './SlinkyTabs.styles'

const SlinkyTabs = () => (
  <View style={styles.container}>
    <Text>SlinkyTabs</Text>
  </View>
)
SlinkyTabs.propTypes = {
  someProp: PropTypes.string,
}

export default SlinkyTabs
