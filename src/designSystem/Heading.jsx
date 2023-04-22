import { StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

const Heading = ({ title }) => {
  return <Text style={styles.heading}>{title}</Text>
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'poppins600',
    fontSize: 24,
    textAlign: 'center',
  },
})

Heading.propTypes = {
  title: PropTypes.string,
}

export { Heading }
