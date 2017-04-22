import { combineReducers } from 'redux'
import navigation from './navigation'
import cards from './cards'
import user from './user'

export default combineReducers({
  navigation,
  cards,
  user
})
