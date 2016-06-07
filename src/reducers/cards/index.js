// NB: no immutable because I couldn't get it working
// I know this mutable state is horrible.
// But immutable just didn't want to work!!!
// I've just isolated it so that the badness is only within this file

import { fromJS } from 'immutable'
import defaultState from './defaultState'
import {
  SAID_YES,
  SAID_NO,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAID_YES: {
      const mutableState = state.toJS()
      delete mutableState.toDo[action.card.id]
      mutableState.yes[action.card.id] = action.card
      return fromJS(mutableState)
    }

    case SAID_NO: {
      const mutableState = state.toJS()
      delete mutableState.toDo[action.card.id]
      mutableState.no[action.card.id] = action.card
      return fromJS(mutableState)
    }

    default:
      return state
  }
}
