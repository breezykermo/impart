import { colors, textStyles } from '../../../../common/constants'

export default {
  container: {},
  tabContainer: {
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    paddingLeft: 36,
    paddingRight: 36,
    // paddingBottom: 10,
  },
  header: {
    backgroundColor: colors.white,
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
