import defaultState from './defaultState'
import {
  FETCH_USER_SUCCESS,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return state.set('id', action.user)

    default:
      return state
  }
}
