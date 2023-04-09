import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const TransactionItem = ({ amount, category, title, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Ionicons
          style={styles.icon}
          name="car-sport-sharp"
          size={24}
          color="black"
        />
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
  icon: {
    borderWidth: 1,
    borderRadius: 4,
    height: 30,
    paddingVertical: 2,
    paddingHorizontal: 4,
    textAlign: 'center',
  },
  detailsTextContainer: {},
  title: {
    fontSize: 16,
    fontFamily: 'poppins500',
  },
  date: {
    fontSize: 12,
    color: '#a5a5a5',
    fontFamily: 'poppins400',
  },
  amount: {
    fontSize: 16,
    fontFamily: 'poppins500',
    color: '#f07f90',
  },
})

TransactionItem.propTypes = {
  amount: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
}

export { TransactionItem }
