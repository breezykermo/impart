import { colors, textStyles } from '../../../../common/constants'

    // TODO: put a space between text and underline
    // titleText & titleTextTwo

export default {
  container: {},
  tabContainer: {
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    paddingLeft: 36,
    paddingRight: 36
    // paddingBottom: 10,
  },
  header: {
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  headerTwo: {
    backgroundColor: 'transparent',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  titleText: [textStyles.copy, {
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: colors.primary
  }],
  titleTextTwo: [textStyles.copy, {
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: colors.copy
  }],
  containerTwo: {
    height: 300,
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    paddingLeft: 36,
    paddingRight: 36,
    backgroundColor: colors.lightGray
  },
  iconContainer: {
    position: 'absolute',
    right: 0
  },
  content: {
    flexDirection: 'column'
  }
}
