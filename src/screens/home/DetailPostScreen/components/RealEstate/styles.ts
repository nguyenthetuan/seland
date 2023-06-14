import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../../../configs/theme/common';
import { COLORS } from '../../../../../constants';

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
    color: COLORS.BLUE_2,
    marginRight: 15,
  },
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
