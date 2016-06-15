import store from 'react-native-simple-store'
import { USER_KEY } from '../../common/constants/api'

export default {
  getUserId() {
    return store.get(USER_KEY)
      // .then(result => JSON.parse(result))
  },
  setUserId(userId) {
    // if (typeof value !== 'object') return Promise.reject(new Error('Value must be a JS Object'))
    // const userObj = JSON.stringify(value)
    return store.update(USER_KEY, userId)
  },
}
