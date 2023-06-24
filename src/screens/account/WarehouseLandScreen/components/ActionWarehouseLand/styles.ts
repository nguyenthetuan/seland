import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: COLORS.GRAY_7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.GRAY_7,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
  },
  action: { color: COLORS.WHITE, fontSize: 16, marginRight: 5, marginTop: -4 },
  actionText: { color: COLORS.WHITE, fontSize: 16, fontWeight: '700' },
  tooltipContainer: {
    backgroundColor: COLORS.WHITE,
    height: 320,
    shadowColor: COLORS.BLACK_1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'flex-start',
    width: 234,
  },

  listAction: {
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  itemAction: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  itemActionText: {
    marginLeft: 5,
    marginTop: -2,
    fontSize: 14,
    lineHeight: 20,
  },
  itemIcon: {
    width: 20,
  },
  itemActionActive: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default styles;
