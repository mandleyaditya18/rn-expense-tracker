import { useMemo } from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../../constants'

import PropTypes from 'prop-types'

const NavigationIcon = ({ route, isFocused }) => {
  const iconColor = useMemo(
    () => (isFocused ? colors.primary : colors.mutedText),
    [isFocused]
  )

  const iconName = useMemo(() => {
    const icon = {
      Home: 'home',
      Insights: 'stats-chart',
      Settings: 'settings',
      Add: 'add-circle',
    }
    return icon[route]
  }, [route])

  return (
    <View>
      <Ionicons name={iconName} size={26} color={iconColor} />
    </View>
  )
}

NavigationIcon.propTypes = {
  route: PropTypes.string,
  isFocused: PropTypes.bool,
}

export { NavigationIcon }
