import {
  createStore,
  // applyMiddleware,
  compose,
} from 'redux'

import reducers from '../reducers'

export default function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    compose(
      // global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope
    )
  )
}
