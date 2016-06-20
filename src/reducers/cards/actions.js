import { goToView } from '../navigation/actions'
import { local } from '../../api'
import views from '../../navigation'
import { allCards } from '../../parse'

/** FETCH action creators **/
export const CARD_FETCH_START = 'CARD_FETCH_START'
export const cardFetchStart = () => ({
  type: CARD_FETCH_START,
})

export const CARD_FETCH_SUCCESS = 'CARD_FETCH_SUCCESS'
export const cardFetchSuccess = cards => ({
  type: CARD_FETCH_SUCCESS,
  cards,
})

export const CARD_FETCH_ERROR = 'CARD_FETCH_ERROR'
export const cardFetchError = error => ({
  type: CARD_FETCH_ERROR,
  error,
})

/** runtime action creators **/
export const SAID_YES = 'SAID_YES'
export const saidYes = card => ({
  type: SAID_YES,
  card,
})

export const SAID_NO = 'SAID_NO'
export const saidNo = card => ({
  type: SAID_NO,
  card,
})

export const REFRESH_CARDS = 'REFRESH_CARDS'
export const refreshCards = () => dispatch => {
  dispatch(fetchFromParse())
}

export const UPDATE_SWIPED = 'UPDATE_SWIPED'
export const updateSwiped = cards => ({
  type: UPDATE_SWIPED,
  cards,
})

export const addToSwiped = card => dispatch => {
  Promise.resolve()
    .then(() => local.addSwipedCard(card))
    .then(swipedCards => dispatch(updateSwiped(swipedCards)))
    // eslint-disable-next-line no-console
    .catch(err => console.log(`ERROR: card not added to local store: ${err}`))
}

export const swipeYes = card => dispatch => {
  dispatch(saidYes(card))
  dispatch(addToSwiped(card))
  dispatch(goToView(views.YES_DETAIL))
}

export const swipeNo = card => dispatch => {
  dispatch(saidNo(card))
  dispatch(addToSwiped(card))
}

export const fetchFromParse = () => (dispatch, getState) => {
  dispatch(cardFetchStart())
  local.getSwipedCards()
    .then(cards => dispatch(updateSwiped(cards)))
    .then(() => allCards.find())
    .then(results => {
      console.log(`${results.length} cards retrieved`) // eslint-disable-line no-console
      // NB: filter by cards that haven't already been swiped
      const filteredResults = results
        .filter(card => !getState().cards.get('swiped').includes(card.id))
      console.log(`${filteredResults.length} cards presented`)
      dispatch(cardFetchSuccess(filteredResults))
    })
    .catch(err => dispatch(cardFetchError(err)))
}
