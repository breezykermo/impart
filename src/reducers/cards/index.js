import { fromJS } from 'immutable'
import defaultState from './defaultState'
import {
  SAID_YES,
  SAID_NO,
  REFRESH_CARDS,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAID_YES: {
      // TODO: use the appropriate immutable methods to make more efficient
      const mutableState = state.toJS()
      delete mutableState.toDo[action.card.id]
      mutableState.yes[action.card.id] = action.card
      return fromJS(mutableState)
    }

    case SAID_NO: {
      // TODO: use the appropriate immutable methods to make more efficient
      const mutableState = state.toJS()
      delete mutableState.toDo[action.card.id]
      mutableState.no[action.card.id] = action.card
      return fromJS(mutableState)
    }

    case REFRESH_CARDS:
      return defaultState

    default:
      return state
  }
}
