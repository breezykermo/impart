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
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 2,
    },
  },
  header: {
    flex: 1,
    textAlign: 'center',
  },
  headerText: [textStyles.h1, {
    backgroundColor: colors.darkGrayOpaque,
    position: 'absolute',
    bottom: 8,
    // backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 1,
  }],
  image: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: CARD_WIDTH - 2, // for border TODO: remove
    // height is automatically set via image proportions
  },
  body: {
    flex: 4,
  },
  organization: {
    padding: 5,
    paddingTop: 14,
  },
  topBreak: {
    marginTop: 8,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
}
