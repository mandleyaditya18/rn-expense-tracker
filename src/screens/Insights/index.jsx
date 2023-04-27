import { StyleSheet, Text, View } from 'react-native'

import { defaultStyle } from './styles'

const Insights = () => {
  return (
    <View style={styles.container}>
      <Text>Insights</Text>
    </View>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

export { Insights }
