import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import {
  useFonts,
  Poppins_400Regular as poppins400,
  Poppins_500Medium as poppins500,
  Poppins_600SemiBold as poppins600,
} from '@expo-google-fonts/poppins'

import { Home } from './src/screens'

export default function App() {
  const [fontsLoaded] = useFonts({ poppins400, poppins500, poppins600 })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
})
