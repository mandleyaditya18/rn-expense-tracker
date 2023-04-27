import { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { activityType, colors } from '../../constants'
import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

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

const styles = StyleSheet.create({ ...defaultStyle })

TransactionActivityCard.propTypes = {
  transactionActivityType: PropTypes.string,
}

export { TransactionActivityCard }
