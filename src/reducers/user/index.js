import defaultState from './defaultState'
import {
  FETCH_USER_SUCCESS,
  UPDATE_FORM
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return state.set('profile', action.user)
        .set('form', action.user)

    case UPDATE_FORM:
      return state.set('form', action.profile)

    default:
      return state
  }
}
