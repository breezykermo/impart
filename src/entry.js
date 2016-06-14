import React from 'react'
import {
  AppRegistry,
} from 'react-native'
import codePush from 'react-native-code-push'
import App from './containers/App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

/**
 * native - Returns the outer layer component for application layer.
 *
 * @return {React Component}  Configure application layer to load JS
 * updates through CodePush, and with Redux store.
 */
export default function native() {
  // remove warnings overlay
  // console.disableYellowBox = true // eslint-disable-line no-console

  const store = configureStore()

  class CharityTinder extends React.Component {
    componentDidMount() {
      codePush.sync()
    }

    render() {
      return (
        <Provider store={store} >
          <App />
        </Provider>
      )
    }
  }

  AppRegistry.registerComponent('CharityTinder', () => CharityTinder)
}
