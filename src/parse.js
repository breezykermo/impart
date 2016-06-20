import Parse from 'parse/react-native'
// import { createMockCards } from './mocks'
import {
  SERVER_URL,
  PARSE_API_KEY,
  PARSE_JS_KEY,
} from './common/constants/api'

// TODO: move these into ENV variables
Parse.initialize(PARSE_API_KEY, PARSE_JS_KEY)
Parse.serverURL = SERVER_URL

export const Card = Parse.Object.extend('Card')
export const Signup = Parse.Object.extend('Signup')
export const User = Parse.User

/**
 * Returns a Promise that will return the newly saved object.
 * NB: This doesn't work at the moment, as you need to use
 * Parse Users and authentication to write data, which I don't
 * want to do right now.
 */
// export const createSignup = (cardId, name, email, phoneNo) => {
//   const newSignup = new Signup()
//   const cardPointer = new Card()
//   cardPointer.id = cardId
//
//   newSignup.save({
//     name,
//     email,
//     phoneNo,
//     card: cardPointer,
//   }, {
//     success: obj => obj,
//     error: err => err,
//   })
// }

const cards = (new Parse.Query(Card)).ascending('createdAt')
// if (__DEV__) {
  // Live parse query
// cards = (new Parse.Query(Card)).ascending('createdAt')
// } else {
//   // Mock parse query
//   const mockParseCards = createMockCards()
//   cards = { find: () => Promise.resolve(mockParseCards) }
// }

export const allCards = cards
export default Parse
