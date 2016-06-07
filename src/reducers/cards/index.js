import defaultState from './defaultState'
import {
  SAID_YES,
  SAID_NO,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAID_YES:
      return state

    case SAID_NO:
      return state

    default:
      return state
  }
}
