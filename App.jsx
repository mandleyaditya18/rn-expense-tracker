import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import {
  useFonts,
  Poppins_400Regular as poppins400,
  Poppins_500Medium as poppins500,
  Poppins_600SemiBold as poppins600,
} from '@expo-google-fonts/poppins'

import { Home, Insights, Settings } from './src/screens'
import { TabBar } from './src/components'
import { colors } from './src/constants'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{ backgroundColor: colors.background }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Home} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({ poppins400, poppins500, poppins600 })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={'BottomTabs'}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="BottomTabs" component={TabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})
