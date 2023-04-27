import { StyleSheet, Text, View, TextInput } from 'react-native'

import PropTypes from 'prop-types'
import { colors } from '../constants'

const Input = ({ type, label, invalid, style, inputConfig }) => {
  const inputStyles = [styles.input]
  const labelStyles = [styles.label]

  if (inputConfig && inputConfig.multiline) {
    inputStyles.push(styles.inputMultiline)
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput)
    labelStyles.push(styles.invalidLabel)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        keyboardType={type}
        style={inputStyles}
        cursorColor={colors.mutedText}
        autoCorrect={false}
        placeholderTextColor={colors.disabledText}
        {...inputConfig}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {},
  label: {
    color: colors.text,
    fontFamily: 'poppins400',
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.secondary,
    padding: 8,
    fontFamily: 'poppins500',
    fontSize: 16,
    color: colors.text,
    borderRadius: 8,
  },
  inputMultiline: {
    minHeight: 120,
    verticalAlign: 'top',
  },
  invalidInput: {
    backgroundColor: colors.dangerBackground,
    borderWidth: 1,
    borderColor: colors.dangerText,
  },
  invalidLabel: {
    color: colors.dangerText,
  },
})

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  style: PropTypes.object,
  inputConfig: PropTypes.object,
}

export { Input }
