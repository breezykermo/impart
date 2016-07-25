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
                buttonText="Sign me up!"
                clientID="a876f8a480f76e7284590dd4573aba644e7fc51f8f4e56d4e73518f55104de87"
                clientSecret="8cbb86a35234d141b5708b7e5d3e85427e15961974791041116e54eda6a57da4"
                redirectURL="impartapp://oidc/cb"
                applicationName="MobileSDK"
                scopes={['email']}
                // backgroundColor={colors.primary}
                style={[buttonStyles.container, {
                  backgroundColor: colors.primary,
                  height: 63,
                }]}
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
