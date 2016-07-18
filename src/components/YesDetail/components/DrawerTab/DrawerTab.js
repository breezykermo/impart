import React, { PropTypes } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  ScrollView,
} from 'react-native'
import styles from './DrawerTab.styles'
import { returnIconAsImage } from '../../../../util/media'
// import AnimatedTab from '../AnimatedTab'

class SlinkyTabs extends React.Component {
  static propTypes = {
    topHeight: PropTypes.number.isRequired,
    topHeightAfterPress: PropTypes.number.isRequired,
    headerOne: PropTypes.string.isRequired,
    renderContentOne: PropTypes.func.isRequired,
    headerTwo: PropTypes.string.isRequired,
    renderContentTwo: PropTypes.func.isRequired,
  }

  static defaultProps = {
    headerOne: '',
    renderContentOne: () => null,
    headerTwo: '',
    renderContentTwo: () => null,
  }

  constructor(props) {
    super(props)
    this._press = this._press.bind(this)
    // this._pressOne = this._pressOne.bind(this)
    // this._pressTwo = this._pressTwo.bind(this)
  }

  state = {
    firstHeight: new Animated.Value(this.props.topHeight), // eslint-disable-line new-cap
    open: false,
  }

  _press() {
    if (this.state.open) {
      Animated.timing(
        this.state.firstHeight,
        { toValue: this.props.topHeight }
      ).start()
    } else {
      Animated.timing(
        this.state.firstHeight,
        { toValue: this.props.topHeightAfterPress }
      ).start()
    }
    this.setState({ open: !this.state.open })
  }

  render() {
    const {
      headerOne,
      renderContentOne,
      headerTwo,
      renderContentTwo,
    } = this.props
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.tabContainer, { height: this.state.firstHeight }]}>
          <TouchableOpacity onPress={this._press}>
            <View style={styles.header}>
              <Text style={styles.titleText}>{headerOne.toUpperCase()}</Text>
              <View style={styles.iconContainer}>
                {returnIconAsImage('dropdown', styles.icon)}
              </View>
            </View>
            <ScrollView style={styles.content}>
              {renderContentOne()}
            </ScrollView>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.tabContainer]}>
          <TouchableOpacity onPress={this._press}>
            <View style={styles.header}>
              <Text style={styles.titleText}>{headerTwo.toUpperCase()}</Text>
              <View style={styles.iconContainer}>
                {returnIconAsImage('dropup', styles.icon)}
              </View>
            </View>
            <ScrollView style={styles.content}>
              {renderContentTwo()}
            </ScrollView>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}

export default SlinkyTabs
