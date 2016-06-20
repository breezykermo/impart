import { fromJS } from 'immutable'

export default fromJS({
  yes: {},
  no: {},
  toDo: {},
  swiped: [],
  isFetching: true, // for no flicker at app startup
})
