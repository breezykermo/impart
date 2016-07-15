import { sizes, colors } from '../../common/constants'

export default {
  screen: {
    position: 'absolute',
    top: 0,
    width: sizes.SCREEN_WIDTH,
    height: sizes.SCREEN_HEIGHT,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
};
