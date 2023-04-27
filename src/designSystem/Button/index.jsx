import { StyleSheet, Text, View, Pressable } from 'react-native'

import { colors } from '../../constants'
import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

const Button = ({ title, type, onPress }) => {
  const buttonStyle = [
    styles.container,
    type === 'secondary' && styles.secondary,
  ]
  const textStyle = [styles.title, type === 'secondary' && styles.secondaryText]
  const rippleStyle = {
    color: type === 'secondary' ? colors.secondary : '#503ade',
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={buttonStyle}
        android_ripple={rippleStyle}
      >
        <Text style={textStyle}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func,
}

export { Button }
