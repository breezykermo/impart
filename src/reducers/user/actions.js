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

export const UPDATE_FORM = 'UPDATE_FORM'
export const updateForm = profile => ({
  type: UPDATE_FORM,
  profile,
})

export const SET_USER_EMAIL = 'SET_USER_EMAIL'
export const setUserEmail = email => ({
  type: SET_USER_EMAIL,
  email,
})

export const syncUser = () => dispatch => {
  const profile = {}
  Promise.resolve()
    .then(() => local.getUserId())
    .then(id => {
      profile.id = id
      return local.getEmail()
    })
    .then(email => {
      profile.email = email
      return local.getPhoneNo()
    })
    .then(phoneNo => {
      profile.phoneNo = phoneNo
      return local.getName()
    })
    .then(name => {
      profile.name = name
      // NB: id will be null if no user in local
      dispatch(fetchUserSuccess(profile))
      // NB: need to filter only those cards that are relevant to the user,
      //      should certainly be done client side. Should fetch data incrementally,
      //      as well, (but again this is an eventually).
      dispatch(fetchFromParse())
    })
    .catch(err => dispatch(fetchUserError(err)))
}

// NB: curried function necessary for thunk middleware
// This is not technically an action creator, and is only
// in this file, listed as an 'action' for clarity. It
// will eventually dispatch error and success actions that
// raise notifications.
export const saveProfile = profile => dispatch => {
  Promise.resolve()
    .then(() => local.setEmail(profile.email))
    .then(() => local.setName(profile.name))
    .then(() => local.setPhoneNo(profile.phoneNo))
    .then(() => dispatch(fetchUserSuccess(profile)))
    .catch(err => { throw new Error(err) })
}
