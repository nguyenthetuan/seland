import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 24,
  },
  boxCheck: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  boxDotLine: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 7,
  },
  boxSelectAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  boxTab: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    paddingHorizontal: 10,
    width: '100%',
  },
  boxType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  btnBack: {
    backgroundColor: COLORS.ORANGE_6,
    width: width * 0.45,
  },
  btnContinue: {
    backgroundColor: COLORS.BLUE_1,
    marginHorizontal: 10,
    marginVertical: 24,
  },
  btnContinue1: {
    backgroundColor: COLORS.BLUE_1,
    width: width * 0.45,
  },
  btnYouWant: {
    borderColor: COLORS.BLUE_1,
    height: 40,
    marginRight: 10,
    width: width * 0.4,
  },
  buySell: {
    flex: 0.49,
    marginBottom: 6,
    marginHorizontal: 4,
  },
  checked: {
    position: 'absolute',
    right: 4,
    top: 4,
  },
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  createPostNews: {
    fontWeight: 500,
  },
  dot: select => ({
    backgroundColor: select ? COLORS.ORANGE_6 : COLORS.GRAY_5,
    borderRadius: 7,
    height: 10,
    width: 10,
  }),
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  inputLabel: {
    color: COLORS.GRAY_7,
    marginTop: 16,
  },
  isBuy: selected => ({
    borderColor: selected ? COLORS.BLUE_2 : COLORS.GRAY_5,
    borderWidth: 2,
    borderRadius: 5,
    padding: 0,
    height: 40,
  }),
  labelTab: select => ({
    color: COLORS.BLACK_1,
    fontSize: 14,
    fontWeight: select ? 'bold' : 400,
  }),
  line: {
    backgroundColor: COLORS.GRAY_5,
    height: 1,
    marginVertical: 10,
    width: '100%',
  },
  line1: select => ({
    backgroundColor: select ? COLORS.ORANGE_6 : COLORS.GRAY_5,
    height: 2,
    marginHorizontal: 5,
    width: '30%',
  }),
  scroll: {
    paddingBottom: 50,
  },
  select: {
    height: 40,
  },
  select1: {
    height: 40,
    width: width * 0.45,
  },
  spinnerTextStyle: {
    color: COLORS.BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
  txtCheck: {
    color: COLORS.BLUE_1,
    fontSize: 14,
    lineHeight: 22,
    marginLeft: 10,
  },
  txtType: select => ({
    color: select ? COLORS.BLUE_1 : COLORS.GRAY_7,
    fontWeight: 'bold',
  }),
  youWant: {
    fontWeight: 500,
    paddingHorizontal: 10,
  },
  youWantCenter: {
    alignItems: 'center',
    fontWeight: 500,
    marginTop: 40,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default styles;
