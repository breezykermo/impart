import defaultState from './defaultState'
import {
  FETCH_USER_SUCCESS,
  UPDATE_EMAIL_TEXT_INPUT,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return state.set('id', action.user)

    case UPDATE_EMAIL_TEXT_INPUT:
      return state.set('emailInput', action.text)

    default:
      return state
  }
}
