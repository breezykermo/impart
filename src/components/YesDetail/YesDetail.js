import React, { PropTypes, Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './YesDetail.styles'
import i18n from '../../common/i18n'
import { formatUrl } from '../../util/react'
import AnimatedTab from './components/AnimatedTab'
import ButtonRow from './components/ButtonRow'
import Profile from '../../containers/Profile'

class YesDetail extends Component {
  static propTypes = {
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
            source={formatUrl(card.get('pictureUrl')) || require('../../media/no-user-image.gif')}
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
          />
          <View style={styles.body}>
            <AnimatedTab title={i18n.details} icon="dropup" />
            <AnimatedTab
              title={i18n.description}
              icon="dropdown"
              renderContent={() => (
                <Text style={styles.longDesc}>{card.get('longDesc')}</Text>
              )}
            />
          </View>
        </View>
      )
    }
    if (this.state.accepted) {
      /* TODO: conditional request for profile fields if not filled */
      component = <Profile backHandler={backHandler} />
    }
    return component
  }
}

export default YesDetail
