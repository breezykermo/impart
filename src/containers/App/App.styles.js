import { styles as colors } from '../../common/constants/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH, NAV_HEIGHT, STATUS_BAR_HEIGHT } from '../../common/constants/sizes'

export default {
  container: {
    backgroundColor: colors.gray,
  },
  swipeCards: {
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  yup: {
    borderColor: colors.green,
  },
  yupText: {
    color: colors.green,
  },
  nope: {
    borderColor: colors.red,
  },
  nopeText: {
    color: colors.red,
  },

  backgroundCard: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    // marginTop: 18,
    height: SCREEN_HEIGHT - NAV_HEIGHT - STATUS_BAR_HEIGHT,
  },
}
