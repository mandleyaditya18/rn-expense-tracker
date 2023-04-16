import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { colors } from '../constants'

const TransactionItem = ({ amount, category, title, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.categoryIconContainer}>
          <Ionicons
            style={styles.icon}
            name="car-sport-sharp"
            size={26}
            color={colors.text}
          />
        </View>
        <View style={styles.detailsTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.amount}>- &#8377;{amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  categoryIconContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
    borderColor: colors.text,
  },
  detailsTextContainer: {},
  title: {
    fontSize: 18,
    fontFamily: 'poppins500',
    color: colors.text,
  },
  date: {
    fontSize: 12,
    color: colors.disabledText,
    fontFamily: 'poppins400',
  },
  amount: {
    fontSize: 16,
    fontFamily: 'poppins500',
    color: colors.dangerText,
  },
})

TransactionItem.propTypes = {
  amount: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
}

export { TransactionItem }
