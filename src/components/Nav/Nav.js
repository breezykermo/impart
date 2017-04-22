import React, { PropTypes } from 'react'
import { View, Image } from 'react-native'
import styles from './Nav.styles'

const Nav = () => (
  <View style={styles.container}>
    <View style={styles.side}>
      <Image
        style={styles.menuIcon}
        source={require('../../media/menu.png')}
      />
    </View>
    <View style={styles.title}>
      <Image
        style={styles.titleImage}
        source={require('../../media/impart-logo.png')}
      />
    </View>
    <View style={styles.side}>
      <Image
        style={styles.searchIcon}
        source={require('../../media/search.png')}
      />
    </View>
  </View>
)
Nav.propTypes = {
  some: PropTypes.string
}

export default Nav
