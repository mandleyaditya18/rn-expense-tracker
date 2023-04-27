import { StyleSheet, Text, View, TextInput } from 'react-native'

import { colors } from '../../constants'
import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

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

const styles = StyleSheet.create({ ...defaultStyle })

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  style: PropTypes.object,
  inputConfig: PropTypes.object,
}

export { Input }
