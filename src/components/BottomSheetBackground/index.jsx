import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'

import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated'

import { defaultStyle } from './styles'

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

const bottomSheetStyle = StyleSheet.create({ ...defaultStyle })

BottomSheetBackground.propTypes = {
  style: PropTypes.object,
  animatedIndex: PropTypes.object,
}

export { BottomSheetBackground }
