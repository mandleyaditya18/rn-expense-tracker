import { StyleSheet, Text, View } from 'react-native'

import { defaultStyle } from './styles'

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

export { Settings }
