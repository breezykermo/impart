import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Animated,
} from 'react-native'
import styles from './SlinkyTabs.styles'
import AnimatedTab from '../AnimatedTab'

class SlinkyTabs extends React.Component {
  static propTypes = {
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

  state = {
    // tabOneTop: Animated.Value(0),
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
        <AnimatedTab
          style={{ flex: 1 }}
          title={headerOne}
          icon="dropdown"
          renderContent={renderContentOne}
        />
        <AnimatedTab
          style={{ flex: 10 }}
          title={headerTwo}
          icon="dropup"
          renderContent={renderContentTwo}
        />
      </View>
    )
  }
}

export default SlinkyTabs
