import { sizes, colors, textStyles } from '../../common/constants'

const yupNopeCore = {
  position: 'absolute',
  top: ((sizes.CARD_HEIGHT / 2) - 5),
  left: ((sizes.CARD_WIDTH / 2) - 8),
  borderRadius: 3,
  borderWidth: 1,
  padding: 10,
}

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
  yup: [yupNopeCore, {
    borderColor: colors.green,
  }],
  yupText: [textStyles.h1, {
    color: colors.green,
  }],
  nope: [yupNopeCore, {
    borderColor: colors.red,
  }],
  nopeText: [textStyles.h1, {
    color: colors.red,
  }],
};
