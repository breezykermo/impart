import defaultState from './defaultState'
import { GO_TO_VIEW } from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case GO_TO_VIEW:
      return state

    default:
      return state
  }
}
