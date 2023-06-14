import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabItem: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_4,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 20,
  },
  tabText: {
    color: COLORS.GRAY_7,
    fontSize: 14,
  },
  tabItemActive: {
    backgroundColor: COLORS.BLUE_1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 20,
  },
  tabTextActive: {
    color: COLORS.WHITE,
    fontSize: 14,
  },
});

export default styles;
