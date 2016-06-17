import { styles as colors } from '../../common/constants/colors'
import { styles as textStyles } from '../../common/constants/text'

const coreContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 5,
  // backgroundColor: colors.white,
  // borderColor: colors.oneHighlight,
  padding: 8,
  marginTop: 8,
  marginBottom: 8,
  marginLeft: 15,
  marginRight: 15,
  /* SHADOW */
  shadowColor: colors.darkGray,
  shadowOpacity: 0.8,
  shadowRadius: 2,
  shadowOffset: {
    height: 5,
    width: 2,
  },
}
const coreText = textStyles.copyButton

export default {
  container: [coreContainer, {

  }],
  text: [coreText, {

  }],
  containerActive: [coreContainer, {

  }],
  textActive: [coreText, {

  }],
}
