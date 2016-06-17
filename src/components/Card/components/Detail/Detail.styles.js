import { styles as textStyles } from '../../../../common/constants/text'

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 21,
    height: 21,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  // icon: {
  //   // textAlign: 'center',
  //   marginLeft: 10,
  //   marginRight: 15,
  //   marginTop: 10,
  //   marginBottom: 10,
  // },
  text: [textStyles.copy, {
    padding: 5,
  }],
}
