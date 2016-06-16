import React, { PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Nav.styles'

const Nav = () => (
  <View style={styles.container}>
    <View style={styles.side}>
      <Image
        style={[styles.iconImage, styles.left]}
        source={require('../../common/images/menu.png')}
      />
    </View>
    <View style={styles.title}>
      <Image
        style={styles.titleImage}
        source={require('../../common/images/impart-logo.png')}
      />
    </View>
    <View style={styles.side}>
      <Image
        style={[styles.iconImage, styles.right]}
        source={require('../../common/images/menu.png')}
      />
    </View>
  </View>
)
Nav.propTypes = {
  some: PropTypes.string,
}

export default Nav
