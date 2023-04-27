import { StyleSheet, View } from 'react-native'

import { Heading, BackButton } from '../../designSystem'
import { TransactionForm } from '../../components'
import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

const AddTransaction = ({ route }) => {
  const transactionType = route.params.transactionType

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BackButton />
        <Heading title={`Add ${transactionType}`} />
        <View />
      </View>
      <TransactionForm />
    </View>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

AddTransaction.propTypes = {
  route: PropTypes.object,
}

export { AddTransaction }
