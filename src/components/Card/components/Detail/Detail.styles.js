import { styles as textStyles } from '../../../../common/constants/text'

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: [textStyles.copy, {
    padding: 5,
  }],
}
