import { SCREEN_HEIGHT, NAV_HEIGHT } from '../../common/constants/sizes'

export default {
  container: {
    paddingTop: (SCREEN_HEIGHT - NAV_HEIGHT) / 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT - NAV_HEIGHT + 100
  },
  spinner: {
    flex: 1,
    backgroundColor: 'transparent'
  }
}
