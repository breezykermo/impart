import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import * as userActions from '../../reducers/user/actions'
import Form, { Profile as ProfileFormType } from '../../util/form'
import React, { PropTypes } from 'react'

import {
  View
} from 'react-native'
import Button from '../../components/Button'
import styles from './Profile.styles'

const Profile = props => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Form
        style={styles.form}
        type={ProfileFormType}
        value={props.form}
        onChange={props.updateForm}
        options={{
          auto: 'placeholders'
        }}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => {
          props.saveProfile(props.form)
          props.signup(props.card, props.form)
          props.backHandler()
        }}
        text='Submit details'
      />
    </View>
  </View>
)
Profile.propTypes = {
  /**
   * Card for which user is inputting info
   **/
  card: PropTypes.object.isRequired,
  /**
   * Function that returns to previous screen.
   * NB: not necessary, if the pop action is a global use case.
   **/
  backHandler: PropTypes.func.isRequired,
  /**
   * Update email input in state
   **/
  updateForm: PropTypes.func.isRequired,
  /**
   * State of Profile fields form
   **/
  form: PropTypes.object.isRequired
}

export default connect(
  state => ({
    form: state.user.get('form')
  }),
  mapDispatchToProps(userActions)
)(Profile)
