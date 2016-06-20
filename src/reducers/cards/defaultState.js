import { fromJS } from 'immutable'

export default fromJS({
  yes: {},
  no: {},
  toDo: {},
  isFetching: true, // for no flicker at app startup
})
