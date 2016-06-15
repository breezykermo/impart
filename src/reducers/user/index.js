import { fromJS } from 'immutable'
import defaultState from './defaultState'
import {
} from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state
  }
}
