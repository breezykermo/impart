import { Dimensions } from 'react-native'
const WINDOW = Dimensions.get('window')

export const STATUS_BAR_HEIGHT = 20
export const CARD_HEIGHT = WINDOW.height - 73 - 34
export const CARD_WIDTH = WINDOW.width - 36
export const SCREEN_HEIGHT = WINDOW.height
export const SCREEN_WIDTH = WINDOW.width
export const NAV_HEIGHT = 70 // NB: should this be hardcoded?
