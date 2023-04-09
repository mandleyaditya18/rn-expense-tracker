import { StyleSheet, Text, Pressable } from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? [styles.container, styles.pressed] : styles.container
      }
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bda8e6',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ac88ef',
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontFamily: 'poppins500',
    color: 'white',
  },
  pressed: {
    opacity: 0.7,
  },
})

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
}

export { Button }
