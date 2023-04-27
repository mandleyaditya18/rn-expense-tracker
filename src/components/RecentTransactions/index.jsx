import { StyleSheet, Text, View, FlatList } from 'react-native'

import { TransactionItem } from '../TransactionItem'

import { defaultStyle } from './styles'

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

const styles = StyleSheet.create({ ...defaultStyle })

export { RecentTransactions }
