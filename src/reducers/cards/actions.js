import { goToView } from '../navigation/actions'
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

// eslint-disable-next-line new-cap
export const fetchFromParse = () => dispatch => {
  dispatch(cardFetchStart())
  Promise.resolve()
    .then(() => allCards.find())
    .then(results => {
      console.log(`${results.length} cards retrieved`) // eslint-disable-line no-console
      dispatch(cardFetchSuccess(results))
    })
    .catch(err => dispatch(cardFetchError(err)))
}

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

export const SWIPE_YES = 'SWIPE_YES'
export const swipeYes = card => dispatch => {
  dispatch(saidYes(card))
  dispatch(goToView(views.YES_DETAIL))
}

export const SWIPE_NO = 'SWIPE_NO'
export const swipeNo = card => dispatch => {
  dispatch(saidNo(card))
}
