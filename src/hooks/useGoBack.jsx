import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

const useGoBack = () => {
  const navigation = useNavigation()

  const goBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return { goBack }
}

export { useGoBack }
