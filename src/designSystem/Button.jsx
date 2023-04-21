import { StyleSheet, Text, View, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { colors } from '../constants'

const Button = ({ title, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={styles.container}
        android_ripple={{ color: '#503ade' }}
      >
        <Text style={styles.title}>{title}</Text>
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
  pressed: {
    opacity: 0.7,
  },
})

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
}

export { Button }
