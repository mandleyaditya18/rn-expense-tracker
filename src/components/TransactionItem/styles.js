import { colors } from '../../constants'

export const defaultStyle = {
  container: {
    paddingVertical: 4,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  categoryIconContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
    borderColor: colors.text,
  },
  detailsTextContainer: {},
  title: {
    fontSize: 18,
    fontFamily: 'poppins500',
    color: colors.text,
  },
  date: {
    fontSize: 12,
    color: colors.disabledText,
    fontFamily: 'poppins400',
  },
  amount: {
    fontSize: 16,
    fontFamily: 'poppins500',
    color: colors.dangerText,
  },
}
