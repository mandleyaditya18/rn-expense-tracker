import { StyleSheet, Text, View, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { colors } from '../constants'

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

const styles = StyleSheet.create({
  outerContainer: {
    overflow: 'hidden',
    borderRadius: 24,
  },
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: colors.secondary,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontFamily: 'poppins600',
    color: colors.white,
    textAlign: 'center',
  },
  secondary: {
    backgroundColor: colors.background,
    borderColor: colors.background,
  },
  secondaryText: {
    color: colors.mutedText,
  },
})

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func,
}

export { Button }
