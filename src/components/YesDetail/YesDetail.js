import React, {
  PropTypes,
  Component,
} from 'react'
import {
  View,
  Text,
  Image,
  requireNativeComponent,
} from 'react-native'
import styles from './YesDetail.styles'
import i18n from '../../common/i18n'
import { getImageObj } from '../../util/react'
import DetailList from '../DetailList'
import DrawerTab from './components/DrawerTab'
import ButtonRow from './components/ButtonRow'
import Profile from '../../containers/Profile'

import buttonStyles from '../Button/Button.styles'
const IDButton = requireNativeComponent('IdentityButton', null)


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
                  borderWidth: 0,
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
