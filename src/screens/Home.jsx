import { View, Text, StyleSheet } from 'react-native'
import { RecentTransactions, SummaryCard } from '../components'
import { colors } from '../constants'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'poppins600',
    color: colors.text,
  },
  activityContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  recentTransactionsContainer: {
    flex: 1,
  },
  summaryInfo: {
    fontSize: 16,
    fontFamily: 'poppins500',
    color: colors.mutedText,
  },
})

export { Home }
