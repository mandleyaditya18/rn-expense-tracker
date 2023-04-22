import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

import { SummaryCardAmount } from './SummaryCardAmount'
import { activityType, colors } from '../constants'

const SummaryCard = () => {
  return (
    <LinearGradient
      colors={[colors.secondary, '#503ade']}
      start={{ x: 0.15, y: 0.5 }}
      end={{ x: 1.5, y: 3.5 }}
      style={styles.container}
    >
      <View style={styles.row}>
        <SummaryCardAmount label="Savings" amount={3000} />
        <Ionicons
          name="ellipsis-horizontal"
          size={24}
          color={colors.mutedText}
        />
      </View>
      <View style={styles.row}>
        <SummaryCardAmount
          label="Income"
          amount={10000}
          transactionActivityType={activityType.INCOME}
        />
        <SummaryCardAmount
          label="Expenses"
          amount={7000}
          transactionActivityType={activityType.EXPENSES}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    borderRadius: 16,
    elevation: 4,
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
})

export { SummaryCard }
