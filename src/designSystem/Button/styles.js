import { colors } from '../../constants'

export const defaultStyle = {
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
}
