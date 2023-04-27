import { StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { useGoBack } from '../../hooks'

import { colors } from '../../constants'
import { defaultStyle } from './styles'

const BackButton = () => {
  const { goBack } = useGoBack()

  return (
    <Pressable
      style={styles.back}
      onPress={goBack}
      android_ripple={{ color: colors.disabledText }}
    >
      <Ionicons name="md-chevron-back-outline" size={24} color="black" />
    </Pressable>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

export { BackButton }
