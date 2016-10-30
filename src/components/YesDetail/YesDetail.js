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
// import IDButton from '../react-native-identity-kit'

// import buttonStyles from '../Button/Button.styles'


class YesDetail extends Component {
  static propTypes = {
    // userHasDetails: PropTypes.bool.isRequired,
    card: PropTypes.object,
    // acceptHandler: PropTypes.func.isRequired,
    rejectHandler: PropTypes.func.isRequired,
    // backHandler: PropTypes.func.isRequired,
  }

  render() {
    let component
    const {
      card,
      // acceptHandler,
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
              <Text>{text}</Text>
              /**
                IDButton
                --------
                used for easy access of the identity.com verification flow
              <IDButton
                buttonText={text}
                clientID="f1938688ee9cc7634598c0b23e933f6df1df3afe480ac0f9832e80dc8ef83373"
                clientSecret="3068614f49331f28b89cc6caae2e1d601a8bc591de711189e8e2ce5a63c0cafd"
                redirectURL="impartapp://oidc/cb"
                applicationName="Impart App"
                scopes={['email']}
                // backgroundColor={colors.primary}
                style={[buttonStyles.container, styles.idButton]}
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
            **/
              /**
                End of IDButton
              **/

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
