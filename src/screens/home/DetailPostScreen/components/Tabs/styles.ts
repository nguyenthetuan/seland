import { StyleSheet } from 'react-native';
import {
  COLOR_BLUE_1,
  COLOR_GRAY_4,
  COLOR_GRAY_7,
  COLOR_WHITE,
} from '../../../../../constants';

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabItem: {
    borderWidth: 1,
    borderColor: COLOR_GRAY_4,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 20,
  },
  tabText: {
    color: COLOR_GRAY_7,
    fontSize: 14,
  },
  tabItemActive: {
    backgroundColor: COLOR_BLUE_1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 20,
  },
  tabTextActive: {
    color: COLOR_WHITE,
    fontSize: 14,
  },
});

export default styles;
