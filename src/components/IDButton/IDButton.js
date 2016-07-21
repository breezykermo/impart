import React, { PropTypes } from 'react'
import {
  requireNativeComponent,
} from 'react-native'
import styles from './IDButton.styles'

const IdentityButton = requireNativeComponent('IdentityButton', null)

const IDButton = props => (
  <IdentityButton
    styles={styles.button}
    clientID={props.clientID}
    clientSecret={props.clientSecret}
    redirectURL={props.redirectURL}
    applicationName={props.applicationName}
  />
)
IDButton.propTypes = {
  clientID: PropTypes.string.isRequired,
  clientSecret: PropTypes.string.isRequired,
  redirectURL: PropTypes.string.isRequired,
  applicationName: PropTypes.string.isRequired,
}

export default IDButton
