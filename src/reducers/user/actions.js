import { local } from '../../api'
import { fetchFromParse } from '../cards/actions'

export const FETCH_USER_START = 'FETCH_USER_START'
export const fetchUserStart = () => ({
  type: FETCH_USER_START,
})

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user,
})

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'
export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error,
})

// export const fetchUserFromParse = () => dispatch => {
//
// }

export const syncUser = () => dispatch => {
  Promise.resolve()
    .then(() => local.getUserId())
    .then(id => {
      // NB: id will be null if no user in local
      dispatch(fetchUserSuccess(id))
      // NB: need to filter only those cards that are relevant to the user,
      //      should certainly be done client side. Should fetch data incrementally,
      //      as well, (but again this is an eventually).
      dispatch(fetchFromParse())
    })
    .catch(err => dispatch(fetchUserError(err)))
}