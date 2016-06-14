import Parse from 'parse/react-native'

Parse.initialize('8683A294D744F6A55879C13E8374A', 'XgsxILrjVR2v45f7a43gY9VfV60WFMGp')
Parse.serverURL = 'http://192.168.99.100:1337/parse'

const Card = Parse.Object.extend('Card')

/* Possible queries */
export const allCards = (new Parse.Query(Card)).ascending('createdAt')

export default Parse
