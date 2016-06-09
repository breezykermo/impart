import { Dimensions } from 'react-native'
import { textStyles } from '../../common/constants'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default {
  container: {
    padding: 15,
    margin: 4,
  },
  header: {
    height: height / 6, // 1/6th
    // width,
    top: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    ...textStyles.h1,
  },
  body: {
    height: height * (4 / 6), // 4/6th
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: height / 6, // 1/6th
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
