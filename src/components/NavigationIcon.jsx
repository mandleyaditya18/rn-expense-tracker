import { useMemo } from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { colors } from '../constants'

const NavigationIcon = ({ route, isFocused }) => {
  const iconColor = useMemo(
    () => (isFocused ? colors.primary : colors.mutedText),
    [isFocused]
  )

  const renderIcon = () => {
    switch (route) {
      case 'Home':
        return <Ionicons name="home" size={26} color={iconColor} />
      case 'Insights':
        return <Ionicons name="stats-chart" size={26} color={iconColor} />
      case 'Settings':
        return <Ionicons name="settings" size={26} color={iconColor} />
      case 'Add':
        return <Ionicons name="add-circle" size={26} color={iconColor} />

      default:
        break
    }
  }

  return <View>{renderIcon(route, isFocused)}</View>
}

NavigationIcon.propTypes = {
  route: PropTypes.string,
  isFocused: PropTypes.bool,
}

export { NavigationIcon }
