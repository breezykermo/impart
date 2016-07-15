import { Dimensions } from 'react-native'
const WINDOW = Dimensions.get('window')

export const SCREEN_HEIGHT = WINDOW.height
export const SCREEN_WIDTH = WINDOW.width

export const STATUS_BAR_HEIGHT = 20
export const NAV_HEIGHT = 70 // NB: should this be hardcoded?

export const CARD_INSET = 18
export const CARD_HEIGHT = WINDOW.height - NAV_HEIGHT - (2 * CARD_INSET)
export const CARD_WIDTH = WINDOW.width - (2 * CARD_INSET)

export default {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
  NAV_HEIGHT,
  CARD_INSET,
  CARD_HEIGHT,
  CARD_WIDTH,
}
