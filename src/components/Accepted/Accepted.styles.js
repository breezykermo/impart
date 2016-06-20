import { styles as colors } from '../../common/constants/colors'
import { CARD_WIDTH } from '../../common/constants/sizes'

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    padding: 10,
    margin: 10,
    borderWidth: 0,
    borderRadius: 10,
  },
  buttonContainer: {
    height: 80,
  },
  input: {
    height: 40,
    width: CARD_WIDTH,
    borderColor: colors.primary,
    borderWidth: 1,
  },
}
