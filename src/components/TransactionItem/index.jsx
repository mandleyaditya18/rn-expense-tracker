import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../../constants'
import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

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

const styles = StyleSheet.create({ ...defaultStyle })

TransactionItem.propTypes = {
  amount: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
}

export { TransactionItem }
