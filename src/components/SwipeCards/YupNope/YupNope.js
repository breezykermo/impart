import React from 'react'
import { Text } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../common/constants/sizes'

const ICON_HEIGHT = 100
const ICON_WIDTH = 100

const styles = {
  container: {
    position: 'absolute',
    top: (SCREEN_HEIGHT / 2) - (ICON_HEIGHT / 2),
    left: (SCREEN_WIDTH / 2) - (ICON_WIDTH / 2),
  },
}

const YupNope = () => {
  return <Text style={styles.container}>Happy days</Text>
}

export default YupNope
