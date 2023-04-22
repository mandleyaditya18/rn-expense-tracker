import { useCallback } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'
import { colors } from '../constants'

const BackButton = () => {
  const navigation = useNavigation()

  const backButtonHandler = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <Pressable
      style={styles.back}
      onPress={backButtonHandler}
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
