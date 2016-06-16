import { styles as textStyles } from '../../../../common/constants/text'

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 31,
    padding: 5,
  },
  text: [textStyles.copy, {
    padding: 5,
  }],
}
