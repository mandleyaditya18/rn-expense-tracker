import { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { activityType, colors } from '../constants'
import { Ionicons } from '@expo/vector-icons'

const TransactionActivityCard = ({ transactionActivityType }) => {
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
    <View style={[styles.container, { backgroundColor: icon.backgroundColor }]}>
      <Text style={styles.title}>{transactionActivityType}</Text>
      <View style={styles.amountContainer}>
        <Ionicons
          name={icon.iconName}
          size={24}
          color={icon.color}
          style={styles.icon}
        />
        <Text style={styles.amount}>&#8377; 3000</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
    borderRadius: 16,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: 'poppins500',
    color: colors.text,
  },
  amount: {
    fontSize: 24,
    fontFamily: 'poppins600',
    color: colors.text,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
})

TransactionActivityCard.propTypes = {
  transactionActivityType: PropTypes.string,
}

export { TransactionActivityCard }
