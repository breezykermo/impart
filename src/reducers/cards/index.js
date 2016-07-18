import { fromJS } from 'immutable'
import defaultState from './defaultState'
import {
  SAID_YES,
  SAID_NO,
  REFRESH_CARDS,
  CARD_FETCH_START,
  CARD_FETCH_SUCCESS,
  CARD_FETCH_ERROR,
  UPDATE_SWIPED,
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAID_YES:
      return state.set('yes', state.get('yes').push(action.card))
        .set('toDo', state.get('toDo').delete(0))

    case SAID_NO:
      return state.set('no', state.get('no').push(action.card))
        .set('toDo', state.get('toDo').delete(0))

    case CARD_FETCH_START:
      return state.set('isFetching', true)

    case CARD_FETCH_SUCCESS: {
      if (!Array.isArray(action.cards)) return state
      return state.set('isFetching', false)
        .set('toDo', fromJS(action.cards))
    }

    case CARD_FETCH_ERROR:
      return state.set('isFetching', false)
        .set('error', action.error)

    case REFRESH_CARDS:
      return defaultState

    case UPDATE_SWIPED:
      return state.set('swiped', action.cards)

    default:
      return state
  }
}
