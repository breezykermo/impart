import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../util/redux'
import * as userActions from '../../reducers/user/actions'
import Form, { Profile as ProfileFormType } from '../../util/form'
import React, { PropTypes } from 'react'

import {
  View,
} from 'react-native'
import Button from '../../components/Button'
import styles from './Profile.styles'

const Profile = props => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Form
        style={styles.form}
        type={ProfileFormType}
        value={props.profile}
        onChange={props.updateProfile}
        options={{
          auto: 'placeholders',
        }}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button onPress={props.backHandler} text="Save Details" />
    </View>
  </View>
)
Profile.propTypes = {
  /**
   * Function that returns to previous screen.
   * NB: not necessary, if the pop action is a global use case.
   **/
  backHandler: PropTypes.func.isRequired,
  /**
   * Update email input in state
   **/
  updateProfile: PropTypes.func.isRequired,
  /**
   * Email input in state.
   **/
  profile: PropTypes.object.isRequired,
}

export default connect(
  state => ({
    profile: state.user.get('profile'),
  }),
  mapDispatchToProps(userActions)
)(Profile)
