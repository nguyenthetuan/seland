import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../../../configs/theme/common';
import {
  COLOR_BLUE_1,
  COLOR_BLUE_2,
  COLOR_GRAY_3,
  COLOR_GRAY_4,
  COLOR_GRAY_5,
  COLOR_GRAY_7,
  COLOR_ORANGE_1,
  COLOR_ORANGE_4,
  COLOR_ORANGE_6,
  COLOR_WHITE,
} from '../../../../../constants';

const styles = StyleSheet.create({
  realEstateWrapper: {
    marginHorizontal: 10,
    marginBottom: 50,
  },
  realEstateItem: {
    marginBottom: 12,
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    color: '#141414',
    fontWeight: '700',
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: COLOR_BLUE_2,
    marginRight: 15,
  },
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
  listRealEstate: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  realEstatePost: {
    width: (deviceWidth - 20) / 2 - 5,
  },
});

export default styles;
