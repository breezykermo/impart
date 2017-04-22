import { styles as textStyles } from '../../common/constants/text'
import { styles as colors } from '../../common/constants/colors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../common/constants/sizes'

export default {
  container: {
    marginTop: -5,
    backgroundColor: colors.white
  },
  headerImage: {
    height: SCREEN_HEIGHT / 3 + 20,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
    // paddingLeft: 43,
    // paddingRight: 43,
  },
  headerText: [textStyles.h1, {
    color: colors.white,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 20,
    marginLeft: 20,
    marginRight: 30,
    padding: 10
  }],
  body: {
    height: SCREEN_HEIGHT * (4 / 6), // 4/6th
    flex: 1
  },
  detailList: {
    marginTop: -15,
    padding: 5
  },
  detail: {
    marginBottom: -4
  },
  longDesc: textStyles.copy,
  idButton: {
    height: 63,
    backgroundColor: colors.primary
  }
}
