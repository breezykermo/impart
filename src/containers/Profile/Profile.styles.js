import { styles as colors } from '../../common/constants/colors'
import { CARD_WIDTH, SCREEN_HEIGHT, NAV_HEIGHT } from '../../common/constants/sizes'

export default {
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT - NAV_HEIGHT,
    backgroundColor: colors.white
  },
  innerContainer: {
    padding: 10,
    margin: 10,
    borderWidth: 0,
    borderRadius: 10,
    width: CARD_WIDTH
  },
  buttonContainer: {
    height: 60
  },
  form: {
    // height: 40,
    width: CARD_WIDTH,
    borderColor: colors.primary,
    borderWidth: 1
  }
}
