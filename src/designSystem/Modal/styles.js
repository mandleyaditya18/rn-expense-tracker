import { colors } from '../../constants'

export const defaultStyle = {
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    right: '10%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
  },
}
