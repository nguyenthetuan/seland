import {
  COLOR_BLACK_1,
  COLOR_BLUE_1,
  COLOR_WHITE,
  COLOR_GRAY_2,
} from '../../../constants';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  bgcTabActive: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BLUE_1,
    borderRadius: 4,
    height: 32,
    justifyContent: 'center',
    // width: '30%',
  },
  bgcTabInactive: {
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 32,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLOR_GRAY_2,
    // width: '30%',
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
  headerTitle: {
    color: COLOR_BLACK_1,
    fontWeight: '500',
    marginLeft: 16,
  },
  tabContainer: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  tabHeaderActiveTitle: {
    color: COLOR_WHITE,
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  tabHeaderInactiveTitle: {
    color: COLOR_BLACK_1,
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});

export default styles;
