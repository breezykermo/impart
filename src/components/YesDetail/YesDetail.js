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
import IDButton from '../react-native-identity-kit'

import buttonStyles from '../Button/Button.styles'
import { colors } from '../../common/constants'


class YesDetail extends Component {
  static propTypes = {
    userHasDetails: PropTypes.bool.isRequired,
    card: PropTypes.object,
    acceptHandler: PropTypes.func.isRequired,
    rejectHandler: PropTypes.func.isRequired,
    backHandler: PropTypes.func.isRequired,
  }

  render() {
    let component
    const {
      card,
      acceptHandler,
      rejectHandler,
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
            rejectHandler={rejectHandler}
            renderButtonTwo={(localAcceptHandler, text) => (
              /**
                IDButton
                --------
                used for easy access of the identity.com verification flow
              **/
              <IDButton
                buttonText={text}
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
                onAccessToken={token => {
                  // eslint-disable-next-line no-console
                  console.log(`Received access token : ${token}`)
                  // NB: This access token is cached on the native side until it is
                  //     explicitly removed or expires. However you can also store
                  //     it on the JS thread if you need more ready access to it.
                }}
                onUserInfo={json => {
                  // eslint-disable-next-line no-console
                  console.log(`Receieved user info : ${JSON.stringify(json)}`)
                  // NB: This is where you would dispatch the redux action creator
                  //     to store the user info on the server. Here I'm just calling
                  //     the accept handler, which caches the card ID in local storage
                  //     and pops the view back to swipe.
                  acceptHandler()
                }}
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
    } else {
      component = null
    }
    return component
  }
}

export default YesDetail
