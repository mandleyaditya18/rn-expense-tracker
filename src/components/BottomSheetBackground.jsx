import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'

import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated'

import PropTypes from 'prop-types'

const BottomSheetBackground = ({ style, animatedIndex }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animatedIndex?.value,
      [0, 1],
      ['#ffffff', '#f9f9ff']
    ),
  }))
  const containerStyle = useMemo(
    () => [
      { ...style, ...bottomSheetStyle.background },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  )

  return <Animated.View pointerEvents="none" style={containerStyle} />
}

const bottomSheetStyle = StyleSheet.create({
  background: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 8,
  },
})

BottomSheetBackground.propTypes = {
  style: PropTypes.object,
  animatedIndex: PropTypes.object,
}

export { BottomSheetBackground }
