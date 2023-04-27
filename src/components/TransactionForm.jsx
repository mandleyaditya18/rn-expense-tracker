import { StyleSheet, View } from 'react-native'

import { Button, Input } from '../designSystem'

import { useTransactionForm } from '../hooks'

const TransactionForm = () => {
  const { form, handleChange, handleSubmit, handleCancel } =
    useTransactionForm()

  return (
    <View style={styles.container}>
      <Input
        type="default"
        label="Title"
        invalid={!form.title.isValid}
        inputConfig={{
          value: form.title.value,
          placeholder: 'Title',
          onChangeText: handleChange.bind(this, 'title'),
        }}
      />
      <View style={styles.row}>
        <Input
          type="decimal-pad"
          label="Amount"
          style={styles.rowInputs}
          invalid={!form.amount.isValid}
          inputConfig={{
            value: form.amount.value,
            placeholder: '0.00',
            onChangeText: handleChange.bind(this, 'amount'),
          }}
        />
        <Input
          type="default"
          label="Date"
          style={styles.rowInputs}
          invalid={!form.date.isValid}
          inputConfig={{
            value: form.date.value,
            placeholder: 'YYYY-MM-DD',
            onChangeText: handleChange.bind(this, 'date'),
          }}
        />
      </View>
      <Input
        type="default"
        label="Category"
        invalid={!form.category.isValid}
        inputConfig={{
          value: form.category.value,
          placeholder: 'Category',
          onChangeText: handleChange.bind(this, 'category'),
        }}
      />
      <Input
        type="default"
        label="Description"
        invalid={!form.description.isValid}
        inputConfig={{
          value: form.description.value,
          multiline: true,
          placeholder: 'Description',
          onChangeText: handleChange.bind(this, 'description'),
        }}
      />
      <View style={styles.submitRow}>
        <View style={[styles.rowInputs]}>
          <Button title="Cancel" type="secondary" onPress={handleCancel} />
        </View>
        <View style={[styles.rowInputs]}>
          <Button title="Add" type="primary" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  rowInputs: {
    flex: 1,
  },
  submitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 20,
    paddingHorizontal: 40,
  },
})

export { TransactionForm }
