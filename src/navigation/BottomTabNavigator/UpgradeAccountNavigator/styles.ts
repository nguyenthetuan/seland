import { COLORS } from '../../../constants';

const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  bgcTabActive: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLUE_1,
    borderRadius: 4,
    height: 32,
    justifyContent: 'center',
    // width: '30%',
  },
  bgcTabInactive: {
    alignContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.GRAY_2,
    borderRadius: 4,
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
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
    color: COLORS.BLACK_1,
    fontWeight: '500',
  },
  tabContainer: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  tabHeaderActiveTitle: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  tabHeaderInactiveTitle: {
    color: COLORS.BLACK_1,
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  wrapIconContainer: {
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  container: { flex: 1, backgroundColor: COLORS.WHITE },
});

export default styles;
