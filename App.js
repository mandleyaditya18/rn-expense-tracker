import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import {
  useFonts,
  Poppins_400Regular as poppins400,
  Poppins_500Medium as poppins500,
  Poppins_600SemiBold as poppins600,
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({ poppins400, poppins500, poppins600 })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'poppins500',
  },
})
