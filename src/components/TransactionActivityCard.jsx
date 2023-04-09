import { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { activityType } from '../constants'
import { Ionicons } from '@expo/vector-icons'
import { Button } from '../designSystem'

const TransactionActivityCard = ({ transactionActivityType }) => {
  const icon = useMemo(() => {
    const iconConfig = {
      [activityType.EXPENSES]: {
        iconName: 'arrow-up-circle-sharp',
        color: '#f07f90',
      },
      [activityType.INCOME]: {
        iconName: 'arrow-down-circle-sharp',
        color: '#83d67a',
      },
    }
    return iconConfig[transactionActivityType]
  }, [transactionActivityType, activityType])

  return (
    <View style={styles.container}>
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
      <Button title={`Add ${transactionActivityType.toLowerCase()}`} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: 'poppins500',
  },
  amount: {
    fontSize: 24,
    fontFamily: 'poppins600',
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
