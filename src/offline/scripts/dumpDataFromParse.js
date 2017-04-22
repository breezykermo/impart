/*
 * This script prints the cards data that is returned from
 * a call to the Parse server. Run from parent folder with:
 *
 *    babel-node src/scripts/dumpDataFromParse.js > src/data/dump.js
**/

/* eslint-disable no-console */
import Parse from 'parse/node'
import {
  SERVER_URL,
  PARSE_API_KEY,
  PARSE_JS_KEY
} from '../../common/constants/api'

Parse.initialize(PARSE_API_KEY, PARSE_JS_KEY)
Parse.serverURL = SERVER_URL

const Card = Parse.Object.extend('Card')

const cards = (new Parse.Query(Card)).ascending('Order')

cards
  .find()
  .then(results => {
    // eslint-disable-next-line max-len
    console.log(`/* eslint-disable */\nexport default ${JSON.stringify(results)}\n/* eslint-enable */`)
  })
/* eslint-enable no-console */
