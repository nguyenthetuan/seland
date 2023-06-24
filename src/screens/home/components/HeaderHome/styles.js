import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  boxSeLand: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxZoning: {
    alignItems: 'center',
  },
  btnMenu: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 20,
    padding: 10,
  },
  checkZoning: {
    fontSize: 10,
    lineHeight: 12,
  },
  headerHome: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.GRAY_2,
    borderBottomWidth: 1,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: COLORS.BLACK_1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
  },
  headerLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerRight: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  line: {
    backgroundColor: COLORS.GRAY_2,
    height: 40,
    marginHorizontal: 16,
    width: 1,
  },
  seLand: {
    color: COLORS.BLUE_4,
    fontSize: 19,
    fontWeight: 'bold',
    lineHeight: 22,
    marginLeft: 7,
  },
});

export default styles;
