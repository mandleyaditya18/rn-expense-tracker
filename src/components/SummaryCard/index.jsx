import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

import { SummaryCardAmount } from '../SummaryCardAmount'
import { activityType, colors } from '../../constants'
import { defaultStyle } from './styles'

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

const styles = StyleSheet.create({ ...defaultStyle })

export { SummaryCard }
