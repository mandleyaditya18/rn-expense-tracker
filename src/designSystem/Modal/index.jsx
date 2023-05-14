import { StyleSheet, View, Pressable, Modal as RNModal } from 'react-native'

import PropTypes from 'prop-types'
import { defaultStyle } from './styles'

const Modal = ({ show, setShow, modalStyle, children }) => {
  return (
    <RNModal
      animationType="fade"
      visible={show}
      transparent={true}
      hardwareAccelerated={true}
      onRequestClose={() => setShow(false)}
    >
      <Pressable style={styles.overlay} onPress={() => setShow(false)} />
      <View style={[styles.modal, modalStyle]}>{children}</View>
    </RNModal>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  modalStyle: PropTypes.object,
  children: PropTypes.node,
}

export { Modal }
