import { StyleSheet, Pressable } from 'react-native'
import { useGoBack } from '../hooks'

import { Ionicons } from '@expo/vector-icons'
import { colors } from '../constants'

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

const styles = StyleSheet.create({
  back: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 6,
    padding: 2,
  },
})

export { BackButton }
