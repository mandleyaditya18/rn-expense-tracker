import { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { activityType, colors } from '../constants'

const SummaryCardAmount = ({ label, amount, transactionActivityType }) => {
  const icon = useMemo(() => {
    const iconConfig = {
      [activityType.EXPENSES]: {
        iconName: 'arrow-up-circle-sharp',
        color: colors.dangerText,
        backgroundColor: colors.dangerBackground,
      },
      [activityType.INCOME]: {
        iconName: 'arrow-down-circle-sharp',
        color: colors.sucessText,
        backgroundColor: colors.successBackground,
      },
    }
    return iconConfig[transactionActivityType]
  }, [transactionActivityType, activityType])

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        {transactionActivityType && (
          <Ionicons
            name={icon.iconName}
            size={24}
            color={icon.color}
            style={styles.icon}
          />
        )}
      </View>
      <Text
        style={[styles.amount, transactionActivityType && { fontSize: 20 }]}
      >
        &#8377; {amount}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  label: {
    fontFamily: 'poppins500',
    fontSize: 16,
    color: colors.mutedText,
  },
  amount: {
    fontFamily: 'poppins600',
    fontSize: 24,
    color: colors.text,
  },
})

SummaryCardAmount.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  transactionActivityType: PropTypes.string,
}

export { SummaryCardAmount }
