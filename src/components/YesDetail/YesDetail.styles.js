import { styles as textStyles } from '../../common/constants/text'
import { styles as colors } from '../../common/constants/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../common/constants/sizes'

export default {
  container: {
    backgroundColor: colors.white,
  },
  headerImage: {
    height: SCREEN_HEIGHT / 4,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 43,
    paddingRight: 43,
  },
  headerText: [textStyles.h1, {
    color: colors.primary,
    backgroundColor: colors.whiteOpaque,
    position: 'absolute',
    padding: 8,
    bottom: 8,
  }],
  body: {
    height: SCREEN_HEIGHT * (4 / 6), // 4/6th
    flex: 1,
  },
  detailList: {
    marginTop: -15,
    padding: 5,
  },
  detail: {
    marginBottom: -5,
  },
  longDesc: textStyles.copy,
}
