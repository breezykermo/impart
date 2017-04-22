import { styles as textStyles } from '../../common/constants/text'
import { CARD_WIDTH } from '../../common/constants/sizes'
import DeviceInfo from 'react-native-device-info'

const deviceType = DeviceInfo.getModel()

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconContainer: {
    // TODO: shift image up to the top of the container (within each row)
    // position: 'absolute',
    // top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 21,
    height: 21,
    marginLeft: (deviceType === 'iPhone 6 Plus') ? 15 : 0,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10
  },
  text: textStyles.copy,
  textContainer: {
    width: CARD_WIDTH - (21 + 10 + 20 + 28)
  }
}
