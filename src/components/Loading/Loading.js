import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './Loading.styles'
import { styles as colors } from '../../common/constants/colors'

const Loading = () => (
  <View style={styles.container}>
    <Spinner
      style={styles.spinner}
      isVisible
      size={200}
      type='WanderingCubes'
      color={colors.primary}
    />
  </View>
)

export default Loading
