import { styles as colors } from '../../common/constants/colors'
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  CARD_INSET,
} from '../../common/constants/sizes'

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
  backgroundCardContainer: {
    top: CARD_INSET,
    left: CARD_INSET,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
}
