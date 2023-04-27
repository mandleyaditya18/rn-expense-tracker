import { colors } from '../../constants'

export const defaultStyle = {
  container: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
    borderRadius: 16,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: 'poppins500',
    color: colors.text,
  },
  amount: {
    fontSize: 24,
    fontFamily: 'poppins600',
    color: colors.text,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
}
