import { STATUS_BAR_HEIGHT } from '../../common/constants/sizes'
import { styles as colors } from '../../common/constants/colors'

export default {
  container: {
    backgroundColor: colors.white,
    flex: 8,
    flexDirection: 'row',
    height: 73,
    paddingTop: STATUS_BAR_HEIGHT,
    paddingBottom: 3,
    // marginBottom: 21,
    // bottom border
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGray,
  },
  title: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImage: {
    width: 79,
    height: 30,
  },
  side: {
    flex: 2,
    padding: 18,
    position: 'absolute',
  },
  iconImage: {
    height: 20,
    width: 30,
  },
  left: {
    left: 0,
  },
  right: {
    right: 18 + 30 + 18,
  },
}
