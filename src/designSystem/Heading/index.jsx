import { StyleSheet, Text } from 'react-native'

import { defaultStyle } from './styles'

import PropTypes from 'prop-types'

const Heading = ({ title }) => {
  return <Text style={styles.heading}>{title}</Text>
}

const styles = StyleSheet.create({ ...defaultStyle })

Heading.propTypes = {
  title: PropTypes.string,
}

export { Heading }
