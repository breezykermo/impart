import { styles as textStyles } from '../../../../common/constants/text'
import { styles as colors } from '../../../../common/constants/colors'
export default {
  container: {
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  titleText: [textStyles.copy, {
    textDecorationLine: 'underline',
  }],
  iconContainer: {
    position: 'absolute',
    right: 0,
  },
  content: {
    flexDirection: 'column',
  },
}
