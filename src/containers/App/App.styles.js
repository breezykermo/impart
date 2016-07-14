import { styles as colors } from '../../common/constants/colors'
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  CARD_WIDTH,
  CARD_HEIGHT,
  CARD_INSET,
} from '../../common/constants/sizes'

export default {
  container: {
    backgroundColor: colors.gray,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  swipeCards: {
    marginBottom: CARD_INSET,
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
  backgroundCardContainer: {
    position: 'absolute',
    top: CARD_INSET,
    left: CARD_INSET,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
}
