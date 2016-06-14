import { goToView } from '../navigation/actions'
import views from '../../navigation'
import { allCards } from '../../parse'

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
export const refreshCards = () => ({
  type: REFRESH_CARDS,
})

export const SWIPE_YES = 'SWIPE_YES'
export const swipeYes = card => dispatch => {
  dispatch(saidYes(card))
  dispatch(goToView(views.YES_DETAIL))
}

export const SWIPE_NO = 'SWIPE_NO'
export const swipeNo = card => dispatch => {
  dispatch(saidNo(card))
}

// eslint-disable-next-line new-cap
export const fetchFromParse = () => dispatch => {
  Promise.resolve()
    .then(() => allCards.find())
    .then(results => {
      console.log(results[0].get('header'))
      console.log(results.length)
    })
}
