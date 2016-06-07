import { Dimensions } from 'react-native'

const WINDOW = Dimensions.get('window')

export default {
  container: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 2,
    padding: 10,
    height: WINDOW.height - 200,
    width: WINDOW.width - 100,
  },
  header: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: WINDOW.width - 125,
  },
  body: {
    flex: 4,
  },
}
