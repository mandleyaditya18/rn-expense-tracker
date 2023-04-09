import { View, Text, StyleSheet } from 'react-native'
import { TransactionActivityCard, RecentTransactions } from '../components'
import { activityType } from '../constants'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, Aditya!</Text>
      <View style={styles.activityContainer}>
        <TransactionActivityCard
          transactionActivityType={activityType.EXPENSES}
        />
        <TransactionActivityCard
          transactionActivityType={activityType.INCOME}
        />
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
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'poppins600',
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
})

export { Home }
