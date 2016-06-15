import Parse from 'parse/react-native'
import { createMockCards } from './mocks'

// TODO: move these into ENV variables
Parse.initialize('8683A294D744F6A55879C13E8374A', 'XgsxILrjVR2v45f7a43gY9VfV60WFMGp')
Parse.serverURL = 'http://192.168.99.100:1337/parse'

export const Card = Parse.Object.extend('Card')

let cards
if (__DEV__) {
  // Live parse query
  cards = (new Parse.Query(Card)).ascending('createdAt')
} else {
  // Mock parse query
  const mockParseCards = createMockCards()
  cards = { find: () => Promise.resolve(mockParseCards) }
}

export const allCards = cards
export default Parse
