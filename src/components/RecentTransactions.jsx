import { StyleSheet, Text, View, FlatList } from 'react-native'

import { TransactionItem } from './TransactionItem'
import { colors } from '../constants'

const data = [...Array(20).keys()].map((_, index) => {
  return {
    id: index,
    amount: 250,
    category: 'Transport',
    title: 'Office commute',
    date: '09 Apr, 2023',
  }
})

const RecentTransactions = () => {
  const renderTransactionItem = ({ item }) => <TransactionItem {...item} />

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Recent Transactions</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <View style={styles.transactionItemContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderTransactionItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'poppins500',
    color: colors.text,
  },
  seeAll: {
    color: colors.mutedText,
    fontSize: 14,
    fontFamily: 'poppins500',
  },
  transactionItemContainer: {
    flex: 1,
  },
})

export { RecentTransactions }
