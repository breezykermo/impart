import { combineReducers } from 'redux'
import view from './view'
import cards from './cards'

export default combineReducers({
  view,
  cards,
})
