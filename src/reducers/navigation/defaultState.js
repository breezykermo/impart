import { fromJS } from 'immutable'
import views from '../../navigation'

export default fromJS({
  current: views.SWIPE,
  stack: [],
})
