import { StyleSheet, Text, View, Pressable } from 'react-native'
import { RadioButton } from 'react-native-paper'

import { colors } from '../../constants'
import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

const RadioButtonGroup = ({ items, selected, onChange }) => {
  return (
    <RadioButton.Group
      onValueChange={(newValue) => onChange(newValue)}
      value={selected}
    >
      <View style={styles.container}>
        {items.map((item) => (
          <Pressable key={item.id} onPress={() => onChange(item.id)}>
            <View style={styles.itemContainer}>
              <RadioButton
                value={item.id}
                uncheckedColor={colors.mutedText}
                color={colors.primary}
              />
              <Text style={styles.itemLabel}>{item.label}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </RadioButton.Group>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

RadioButtonGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  selected: PropTypes.string,
  onChange: PropTypes.func,
}

export { RadioButtonGroup }
