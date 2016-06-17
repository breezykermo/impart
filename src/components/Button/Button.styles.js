import { styles as colors } from '../../common/constants/colors'
import { styles as textStyles } from '../../common/constants/text'

const coreContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 0.5,
  borderColor: colors.primary,
  borderRadius: 5,
  paddingBottom: 18,
  paddingTop: 18,
  paddingLeft: 23,
  paddingRight: 23,
  marginLeft: 15,
  marginRight: 15,
  /* SHADOW */
  shadowColor: colors.darkGray,
  shadowOpacity: 1,
  shadowRadius: 0,
  shadowOffset: {
    height: 2,
    width: 1,
  },
}
const coreText = textStyles.copyButton

export default {
  container: [coreContainer, {
    backgroundColor: colors.white,
  }],
  text: coreText,
  containerActive: [coreContainer, {
    backgroundColor: colors.primary,
  }],
  textActive: [coreText, {
    color: colors.white,
  }],
}
