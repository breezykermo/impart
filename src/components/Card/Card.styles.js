import { styles as textStyles } from '../../common/constants/text'
import { styles as colors } from '../../common/constants/colors'
import { CARD_WIDTH, CARD_HEIGHT } from '../../common/constants/sizes'

export default {
  container: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderColor: colors.darkGray,
    borderWidth: 1,
    /* height and width are calculated via side padding,
     * so that the feel is roughly the same on other devices,
     * if slightly overpadded */
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    marginBottom: 18,
    marginTop: 18,
    /* SHADOW */
    shadowColor: colors.darkGray,
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 2,
    },
  },
  headerText: [textStyles.h1, {
    color: colors.primary,
    backgroundColor: colors.whiteOpaque,
    position: 'absolute',
    bottom: 8,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 1,
  }],
  image: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: CARD_WIDTH - 2, // -2 for border
    /* NB: height is automatically set via image proportions */
  },
  body: {},
}
