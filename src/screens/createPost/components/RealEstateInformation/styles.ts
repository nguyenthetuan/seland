import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxDotLine: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 7,
  },
  txtExpand: {
    color: COLORS.ORANGE_5,
    fontSize: 14,
  },
  btnExpand: {
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxSelectAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
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
  boxTitle: {
    backgroundColor: COLORS.ORANGE_7,
    marginVertical: 10,
    padding: 10,
  },
  boxType: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  boxTypeRealEstate: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  boxUtils: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnSelectUtils: {
    borderColor: COLORS.BLUE_1,
    borderRadius: 16,
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  btnTypeRealEstate: selected => ({
    borderColor: selected ? COLORS.BLUE_2 : COLORS.GRAY_5,
    borderWidth: 2,
    padding: 0,
    height: 40,
    width: width * 0.46,
  }),
  btnYouWant: {
    borderColor: COLORS.BLUE_1,
    borderRadius: 5,
    width: width * 0.45,
  },
  buySell: {
    flex: 0.49,
    marginBottom: 6,
    marginHorizontal: 4,
    minWidth: width * 0.35,
  },
  checked: {
    position: 'absolute',
    right: 4,
    top: 4,
  },
  container: {
    marginTop: 40,
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
  inputContainerStyle: {
    width: width * 0.46,
  },
  inputLabel: {
    color: COLORS.GRAY_7,
  },
  isBuy: selected => ({
    borderColor: selected ? COLORS.BLUE_2 : COLORS.GRAY_5,
    borderWidth: 2,
    padding: 0,
    height: 40,
  }),
  itemRealEstate: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: width * 0.43,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  labelTab: select => ({
    color: COLORS.BLACK_1,
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
  m2: {
    color: COLORS.ORANGE_6,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 12,
    marginTop: -12,
  },
  realEstateType: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  scroll: {
    paddingBottom: 50,
  },
  select: {
    height: 40,
    width: width * 0.95,
  },
  select1: {
    height: 40,
    width: width * 0.46,
  },
  title: {
    color: COLORS.ORANGE_6,
    fontWeight: 'bold',
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
  youWantCenter: {
    alignItems: 'center',
    fontWeight: 500,
    marginTop: 40,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default styles;
