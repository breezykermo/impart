// NB: no immutable because I couldn't get it working
// I know this mutable state is horrible.
// But immutable just didn't want to work!!!

import defaultState from './defaultState'
import {
  SAID_YES,
  SAID_NO,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAID_YES:
      delete state.toDo[action.card.id]
      state.yes[action.card.id] = action.card
      return state

    case SAID_NO:
      delete state.toDo[action.card.id]
      state.no[action.card.id] = action.card
      return state

    default:
      return state
  }
}
