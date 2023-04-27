import { useRef } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'

import { NavigationIcon } from '../NavigationIcon'
import { AddBottomSheet } from '../AddBottomSheet'

import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

const TabBar = ({ state, descriptors, navigation }) => {
  const bottomSheetRef = useRef(null)

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (route.name === 'Add') {
            bottomSheetRef?.current?.present()
          } else if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <Pressable onPress={onPress} style={styles.pressableContainer}>
              <View
                style={[
                  styles.navigationIconContainer,
                  isFocused && styles.navigationSelectedContainer,
                ]}
              >
                <NavigationIcon route={label} isFocused={isFocused} />
              </View>
            </Pressable>
            <AddBottomSheet ref={bottomSheetRef} />
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

TabBar.propTypes = {
  state: PropTypes.object,
  descriptors: PropTypes.object,
  navigation: PropTypes.object,
}

export { TabBar }
