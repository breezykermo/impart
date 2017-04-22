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
