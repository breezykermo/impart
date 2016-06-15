import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import styles from './YesDetail.styles'
import Button from '../Button'
import Accepted from '../Accepted'

class YesDetail extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    acceptHandler: PropTypes.func.isRequired,
    rejectHandler: PropTypes.func.isRequired,
    backHandler: PropTypes.func.isRequired,
  }

  state = {
    accepted: false,
  }

  render() {
    let component
    const { card, acceptHandler, rejectHandler, backHandler } = this.props
    if (card) {
      component = (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{card.get('header')}</Text>
          </View>
          <View style={styles.body}>
            <Text style={{ paddingBottom: 20 }}>{card.get('shortDesc')}</Text>
            <Text>{card.get('longDesc')}</Text>
          </View>
          <View style={styles.footer}>
            <Button onPress={rejectHandler}>No, thanks</Button>
            <Button
              onPress={() => {
                this.setState({ accepted: true })
                acceptHandler()
              }}
            >Sign me up!</Button>
          </View>
        </View>
      )
    }
    if (this.state.accepted) component = <Accepted backHandler={backHandler} />
    return component
  }
}

export default YesDetail
