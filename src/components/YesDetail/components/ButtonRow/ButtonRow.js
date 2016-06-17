import React, { PropTypes } from 'react'
import { View } from 'react-native'
import i18n from '../../../../common/i18n'
import styles from './ButtonRow.styles'
import Button from '../../../Button'

const ButtonRow = ({ acceptHandler, rejectHandler }) => (
  <View style={styles.buttonContainer}>
    <Button style={styles.button} onPress={rejectHandler} text={i18n.rejectButton} />
    <Button style={styles.button} onPress={acceptHandler} text={i18n.acceptButton} />
  </View>
)
ButtonRow.propTypes = {
  acceptHandler: PropTypes.func.isRequired,
  rejectHandler: PropTypes.func.isRequired,
}

export default ButtonRow
