import React, { PropTypes } from 'react'
import {
  View,
  TextInput,
} from 'react-native'

import styles from './Accepted.styles'
import Button from '../Button'

const Accepted = props => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeTextHandler}
        value={props.inputText}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button onPress={props.backHandler} text="Back to swiping" />
    </View>
  </View>
)
Accepted.propTypes = {
  backHandler: PropTypes.func.isRequired,
  onChangeTextHandler: PropTypes.func.isRequired,
  inputText: PropTypes.string,
}

export default Accepted
