import defaultState from './defaultState'
import {
  GO_TO_VIEW,
  POP_VIEW
} from './actions'

export default (state = defaultState, action) => {
  const stack = state.get('stack')
  const current = state.get('current')

  switch (action.type) {
    case GO_TO_VIEW:
      return state
        .set('stack', stack.insert(0, current))
        .set('current', action.view)

    case POP_VIEW:
      return state
        .set('current', stack.last())
        .set('stack', stack.pop())

    default:
      return state
  }
}
