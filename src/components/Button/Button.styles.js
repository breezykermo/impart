import { styles as colors } from '../../common/constants/colors'
import { styles as textStyles } from '../../common/constants/text'

const coreContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: colors.primary,
  borderRadius: 5,
  paddingBottom: 18,
  paddingTop: 18,
  paddingLeft: 28,
  paddingRight: 28,
  marginLeft: 25,
  marginRight: 25,
  /* SHADOW */
  shadowColor: colors.darkGray,
  shadowOpacity: 1,
  shadowRadius: 1,
  shadowOffset: {
    height: 1,
    width: 1,
  },
}
const coreText = textStyles.copyButton

export default {
  container: [coreContainer, {
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: colors.white,
  }],
  text: [coreText],
  containerActive: [coreContainer, {
    backgroundColor: colors.primary,
  }],
  textActive: [coreText, {
    color: colors.white,
  }],
}
