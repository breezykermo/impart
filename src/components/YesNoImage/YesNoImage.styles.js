import { sizes } from '../../common/constants'

const IMAGE_HEIGHT = 50
const IMAGE_WIDTH = 50

export default {
  image: {
    position: 'absolute',
    top: (sizes.CARD_HEIGHT / 2) - (IMAGE_HEIGHT / 2),
    left: (sizes.CARD_WIDTH / 2) - (IMAGE_WIDTH / 2),
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
  },
}
