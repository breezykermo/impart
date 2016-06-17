import { fromJS } from 'immutable'
import defaultState from './defaultState'
import {
  SAID_YES,
  SAID_NO,
  REFRESH_CARDS,
  CARD_FETCH_START,
  CARD_FETCH_SUCCESS,
  CARD_FETCH_ERROR,
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

    case CARD_FETCH_START:
      return state.set('isFetching', true)

    case CARD_FETCH_SUCCESS: {
      if (!Array.isArray(action.cards)) return state
      const cardsJS = {}
      action.cards.forEach(card => { cardsJS[card.id] = card })
      return state.set('isFetching', false)
        // .set('toDo', fromJS(cardsJS))
    }

    case CARD_FETCH_ERROR:
      return state.set('isFetching', false)
        .set('error', action.error)

    case REFRESH_CARDS:
      return defaultState

    default:
      return state
  }
}
