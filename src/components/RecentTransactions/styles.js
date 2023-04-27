import { colors } from '../../constants'

export const defaultStyle = {
  container: {
    paddingVertical: 12,
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'poppins500',
    color: colors.text,
  },
  seeAll: {
    color: colors.mutedText,
    fontSize: 14,
    fontFamily: 'poppins500',
  },
  transactionItemContainer: {
    flex: 1,
  },
}
