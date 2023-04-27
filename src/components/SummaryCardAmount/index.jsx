import { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { activityType, colors } from '../../constants'
import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

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

const styles = StyleSheet.create({ ...defaultStyle })

SummaryCardAmount.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  transactionActivityType: PropTypes.string,
}

export { SummaryCardAmount }
