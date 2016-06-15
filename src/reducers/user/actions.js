import { local } from '../../api'
import { fetchFromParse } from '../cards/actions'

export const syncUser = () => dispatch => {
  Promise.resolve()
    .then(() => local.getUserId())
    .then(id => {
      if (!id) return null
      dispatch() // TODO: dispatch here
      dispatch(fetchFromParse())
      return null
    })
}
