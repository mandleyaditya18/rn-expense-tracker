import { colors } from '../../constants'

export const defaultStyle = {
  inputContainer: {},
  label: {
    color: colors.text,
    fontFamily: 'poppins400',
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.secondary,
    padding: 8,
    fontFamily: 'poppins500',
    fontSize: 16,
    color: colors.text,
    borderRadius: 8,
  },
  inputMultiline: {
    minHeight: 120,
    verticalAlign: 'top',
  },
  invalidInput: {
    backgroundColor: colors.dangerBackground,
    borderWidth: 1,
    borderColor: colors.dangerText,
  },
  invalidLabel: {
    color: colors.dangerText,
  },
}
