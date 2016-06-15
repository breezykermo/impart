import Parse from 'parse/react-native'
import mockCards from './mocks'

Parse.initialize('8683A294D744F6A55879C13E8374A', 'XgsxILrjVR2v45f7a43gY9VfV60WFMGp')
Parse.serverURL = 'http://192.168.99.100:1337/parse'

const Card = Parse.Object.extend('Card')

/* Possible queries */
let cards
if (__DEV__) {
  cards = (new Parse.Query(Card)).ascending('createdAt')
} else {
  cards = new Promise(resolve => {
    resolve(
      Object.keys(mockCards).map(id => {
        const item = mockCards[id]
        return {
          get: key => item.hasOwnProperty(key) ? item[key] : null,
        }
      })
    )
  })
}

export const allCards = cards
export default Parse
