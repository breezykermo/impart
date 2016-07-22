import React, {
  PropTypes,
  Component,
} from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import styles from './YesDetail.styles'
import i18n from '../../common/i18n'
import { getImageObj } from '../../util/react'
import DetailList from '../DetailList'
import DrawerTab from './components/DrawerTab'
import ButtonRow from './components/ButtonRow'
import Profile from '../../containers/Profile'
import IDButton from '../react-native-identity-kit'

import buttonStyles from '../Button/Button.styles'
import { colors } from '../../common/constants'


class YesDetail extends Component {
  static propTypes = {
    userHasDetails: PropTypes.bool.isRequired,
    card: PropTypes.object.isRequired,
    acceptHandler: PropTypes.func.isRequired,
    rejectHandler: PropTypes.func.isRequired,
    backHandler: PropTypes.func.isRequired,
  }

  state = {
    detailsShowing: false,
    accepted: false,
  }

  render() {
    let component
    const {
      card,
      acceptHandler,
      rejectHandler,
      backHandler,
    } = this.props

    if (card) {
      component = (
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            source={getImageObj(card.get('pictureUrl'), true)}
            style={styles.headerImage}
          >
            <Text style={styles.headerText}>{card.get('header')}</Text>
          </Image>
          <ButtonRow
            acceptHandler={() => {
              this.setState({ accepted: true })
              acceptHandler()
            }}
            rejectHandler={() => {
              this.setState({ accepted: false })
              rejectHandler()
            }}
            renderButtonTwo={() => (
              <IDButton
                style={[buttonStyles.container, {
                  borderColor: 'transparent',
                  height: 63,
                }]}
                backgroundColor={colors.primary}
                buttonText="Sign me up!"
                clientID="c231041a5d71e700dd9d014c8e6e50b287dbb3780d0e5b002589f57485078818"
                clientSecret="805ad7c5795e4ce1a839ef2ef0d64cd9b5a8967a548c803e04195774668626fa"
                redirectURL="impartapp://oidc/cb"
                applicationName="MobileSDK"
                scopes={['email']}
              />
            )}
          />
          <DrawerTab
            topHeight={55}
            topHeightAfterPress={300}
            headerOne={i18n.details}
            renderContentOne={() => (
              <DetailList
                containerStyles={styles.detailList}
                itemStyles={styles.detail}
                data={card}
              />
            )}
            headerTwo={i18n.description}
            renderContentTwo={() => (<Text style={styles.longDesc}>{card.get('longDesc')}</Text>)}
          />
        </View>
      )
    }
    if (this.state.accepted) {
      /* TODO: conditional request for profile fields if not filled */
      component = <Profile card={card} backHandler={backHandler} />
    }
    return component
  }
}

export default YesDetail
