import { colors } from '../../constants'

export const defaultStyle = {
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
  },
  pressableContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  navigationIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
  },
  navigationSelectedContainer: {
    backgroundColor: colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 40,
  },
  navigationLabel: {
    fontSize: 12,
    fontFamily: 'poppins400',
    color: colors.primary,
    marginLeft: 4,
    marginTop: 4,
  },
}
