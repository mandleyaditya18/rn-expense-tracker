import { colors } from '../../constants'

export const defaultStyle = {
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'poppins600',
    color: colors.text,
  },
  activityContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  recentTransactionsContainer: {
    flex: 1,
  },
  summaryInfo: {
    fontSize: 16,
    fontFamily: 'poppins500',
    color: colors.mutedText,
  },
}
