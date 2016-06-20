import defaultState from './defaultState'
import {
  FETCH_USER_SUCCESS,
  UPDATE_PROFILE,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return state.set('id', action.user)

    case UPDATE_PROFILE:
      return state.set('profile', action.profile)

    default:
      return state
  }
}
