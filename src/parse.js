import Parse from 'parse/react-native'
import { createMockCards } from './mocks'
import {
  SERVER_URL,
  PARSE_API_KEY,
  PARSE_JS_KEY,
} from './common/constants/api'

// TODO: move these into ENV variables
Parse.initialize(PARSE_API_KEY, PARSE_JS_KEY)
Parse.serverURL = SERVER_URL

export const Card = Parse.Object.extend('Card')

let cards
// if (__DEV__) {
  // Live parse query
cards = (new Parse.Query(Card)).ascending('createdAt')
// } else {
//   // Mock parse query
//   const mockParseCards = createMockCards()
//   cards = { find: () => Promise.resolve(mockParseCards) }
// }

export const allCards = cards
export default Parse
