import React, { PropTypes } from 'react'
import { Animated } from 'react-native'
import styles from './YesNoImage.styles'

const YesNoImage = ({ pan, type }) => {
  const isYes = (type === 'yes')

  const yupOpacity = pan.x.interpolate({inputRange: [0, 150], outputRange: [0, 1]});
  const yupScale = pan.x.interpolate({inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp'});
  const nopeOpacity = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0]});
  const nopeScale = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp'});

  const animatedStyles = {
    transform: [{ scale: isYes ? yupScale : nopeScale }],
    opacity: isYes ? yupOpacity : nopeOpacity,
  }

  return (
    <Animated.Image
      style={[styles.image, animatedStyles]}
      source={isYes ? require('../../media/yes.png') : require('../../media/no.png')}
    />
  )
}
YesNoImage.propTypes = {
  type: PropTypes.oneOf(['yes', 'no']),
  pan: PropTypes.any.isRequired,
}

export default YesNoImage
