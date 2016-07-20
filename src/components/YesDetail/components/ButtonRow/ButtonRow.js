import React, { PropTypes } from 'react'
import { View } from 'react-native'
import i18n from '../../../../common/i18n'
import styles from './ButtonRow.styles'
import Button from '../../../Button'

const ButtonRow = ({ acceptHandler, rejectHandler, renderButtonOne, renderButtonTwo }) => (
  <View style={styles.buttonContainer}>
    {renderButtonOne ? renderButtonOne(rejectHandler, i18n.rejectButton) : (
      <Button style={styles.buttonOne} onPress={rejectHandler} text={i18n.rejectButton} />
    )}
    {renderButtonTwo ? renderButtonTwo(acceptHandler, i18n.acceptButton) : (
      <Button style={styles.buttonTwo} onPress={acceptHandler} text={i18n.acceptButton} />
    )}
  </View>
)
ButtonRow.propTypes = {
  acceptHandler: PropTypes.func.isRequired,
  rejectHandler: PropTypes.func.isRequired,
  renderButtonOne: PropTypes.func,
  renderButtonTwo: PropTypes.func,
}

export default ButtonRow
