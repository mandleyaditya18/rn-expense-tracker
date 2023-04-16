import { StyleSheet, View, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { NavigationIcon } from './NavigationIcon'
import { colors } from '../constants'

const TabBar = ({ state, descriptors, navigation }) => {
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

          if (!isFocused && !event.defaultPrevented) {
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
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
  },
  pressableContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  navigationIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
  },
  navigationSelectedContainer: {
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  navigationLabel: {
    fontSize: 12,
    fontFamily: 'poppins400',
    color: colors.primary,
    marginLeft: 4,
    marginTop: 4,
  },
})

TabBar.propTypes = {
  state: PropTypes.object,
  descriptors: PropTypes.object,
  navigation: PropTypes.object,
}

export { TabBar }
