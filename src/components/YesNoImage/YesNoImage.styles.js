import { sizes } from '../../common/constants'

const IMAGE_HEIGHT = 80
const IMAGE_WIDTH = 80

export default {
  image: {
    position: 'absolute',
    top: (sizes.CARD_HEIGHT / 3) - (IMAGE_HEIGHT / 2),
    left: (sizes.CARD_WIDTH / 2) - (IMAGE_WIDTH / 2),
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH
  }
}
