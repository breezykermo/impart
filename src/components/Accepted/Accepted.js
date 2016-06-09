import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './Accepted.styles'
import Button from '../Button'

const Accepted = props => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Text>This is where you will authenticate with the brand spanking new iD SDK!!!!!!!!</Text>
    </View>
    <Button onPress={props.backHandler}>
      Back to swiping
    </Button>
  </View>
)
Accepted.propTypes = {
  backHandler: PropTypes.func.isRequired,
}

export default Accepted
