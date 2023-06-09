import { COLOR_BLACK_1, COLOR_BLUE_6, COLOR_WHITE } from '../../../constants';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  bgcTabActive: {
    alignContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLOR_BLUE_6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
    marginRight: 32,
    // width: '30%',
  },
  bgcTabInactive: {
    alignContent: 'center',
    alignItems: 'center',
    height: 32,
    justifyContent: 'center',
    marginRight: 32,
    // width: '30%',
  },
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    flexDirection: 'row',
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8
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
    color: COLOR_BLUE_6,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    // paddingHorizontal: 16,
    paddingVertical: 4,
  },
  tabHeaderInactiveTitle: {
    color: COLOR_BLACK_1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    // paddingHorizontal: 16,
    paddingVertical: 4,
  },
});

export default styles;
