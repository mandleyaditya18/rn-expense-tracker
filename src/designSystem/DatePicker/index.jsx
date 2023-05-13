import { useState, useCallback } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import { defaultStyle } from './styles'
import { parseDateToLocal } from '../../utils/dateHelpers'
import PropTypes from 'prop-types'

const DatePicker = ({ label, style, value, onChange }) => {
  const [datePicker, setDatePicker] = useState(false)

  const showDatePicker = useCallback(() => {
    setDatePicker(true)
  }, [])

  const onChangeHandler = useCallback(
    (event, selectedDate) => {
      setDatePicker(false)
      if (selectedDate) {
        onChange(selectedDate)
      }
    },
    [onChange]
  )

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      {datePicker && (
        <DateTimePicker
          value={value}
          mode="date"
          is24Hour={true}
          onChange={onChangeHandler}
        />
      )}
      <Pressable style={styles.datePickerInput} onPress={showDatePicker}>
        <Text style={styles.date}>{parseDateToLocal(value)}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  style: PropTypes.object,
}

export { DatePicker }
