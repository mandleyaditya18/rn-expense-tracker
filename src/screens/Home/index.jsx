import { View, Text, StyleSheet } from 'react-native'
import { RecentTransactions, SummaryCard } from '../../components'
import { defaultStyle } from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, Aditya!</Text>
      <Text
        style={styles.summaryInfo}
      >{`Here's your summary for this month`}</Text>
      <View style={styles.activityContainer}>
        <SummaryCard />
      </View>
      <View style={styles.recentTransactionsContainer}>
        <RecentTransactions />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

export { Home }
