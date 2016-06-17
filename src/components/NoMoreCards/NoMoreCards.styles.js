import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../common/constants/sizes'
import { styles as textStyles } from '../../common/constants/text'
export default {
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    paddingLeft: SCREEN_WIDTH / 6,
    paddingRight: SCREEN_WIDTH / 6,
  },
  comeBackImage: {
    marginTop: 68,
    marginBottom: 28,
    height: 68,
    width: 68,
  },
  text: [textStyles.copy, {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  }],
  refreshButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
}
