import Parse from 'parse/react-native'
import mockParseCards from './offline/data/cards.js'
import {
  SERVER_URL,
  PARSE_API_KEY,
  PARSE_JS_KEY
} from './common/constants/api'

// TODO: move these into ENV variables
Parse.initialize(PARSE_API_KEY, PARSE_JS_KEY)
Parse.serverURL = SERVER_URL

export const Card = Parse.Object.extend('Card')

let cards
// if (__DEV__) {
//   console.log('RUNNING WITH LIVE SERVER') // eslint-disable-line no-console
//   cards = (new Parse.Query(Card)).ascending('Order')
// } else {
console.log('RUNNING WITH OFFLINE CACHE') // eslint-disable-line no-console
cards = {
  find: () => Promise.resolve(mockParseCards
      .map(card => {
        const c = new Card()
        Object.keys(card).forEach(key => {
          if (key !== 'objectId') {
            c.set(key, card[key])
          }
        })
        return c
      })
    )
}
// }

// cards.find().then(res => console.log(res))

export const allCards = cards
export default Parse
