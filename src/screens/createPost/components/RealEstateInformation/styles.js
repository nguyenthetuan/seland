import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLUE_1,
  COLOR_BLUE_2,
  COLOR_GRAY_5,
  COLOR_GRAY_7,
  COLOR_ORANGE_6,
  COLOR_ORANGE_7,
} from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxDotLine: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 7,
  },
  boxSelectAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: COLOR_ORANGE_7,
    marginVertical: 10,
    padding: 10,
  },
  boxType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  boxTypeRealEstate: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5,
  },
  btnSelectUtils: {
    borderColor: COLOR_BLUE_1,
    borderRadius: 16,
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  btnTypeRealEstate: selected => ({
    borderColor: selected ? COLOR_BLUE_2 : COLOR_GRAY_5,
    borderWidth: 2,
    padding: 0,
    height: 40,
    width: width * 0.46,
  }),
  btnYouWant: {
    borderColor: COLOR_BLUE_1,
    borderRadius: 5,
    width: width * 0.45,
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
    marginTop: 40,
  },
  createPostNews: {
    fontWeight: 500,
  },
  dot: select => ({
    backgroundColor: select ? COLOR_ORANGE_6 : COLOR_GRAY_5,
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
    width: width * 0.45,
  },
  inputLabel: {
    color: COLOR_GRAY_7,
  },
  isBuy: selected => ({
    borderColor: selected ? COLOR_BLUE_2 : COLOR_GRAY_5,
    borderWidth: 2,
    padding: 0,
    height: 40,
  }),
  itemRealEstate: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: width * 0.46,
  },
  labelTab: select => ({
    color: COLOR_BLACK_1,
    fontWeight: select ? 'bold' : 400,
  }),
  line: {
    backgroundColor: COLOR_GRAY_5,
    height: 1,
    marginVertical: 10,
    width: '100%',
  },
  line1: select => ({
    backgroundColor: select ? COLOR_ORANGE_6 : COLOR_GRAY_5,
    height: 2,
    marginHorizontal: 5,
    width: '30%',
  }),
  m2: {
    color: COLOR_ORANGE_6,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 12,
    marginTop: -12,
  },
  realEstateType: {
    fontWeight: 500,
    paddingHorizontal: 10,
  },
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
  title: {
    color: COLOR_ORANGE_6,
    fontWeight: 'bold',
  },
  txtCheck: {
    color: COLOR_BLUE_1,
    fontSize: 14,
    lineHeight: 22,
    marginLeft: 10,
  },
  txtType: select => ({
    color: select ? COLOR_BLUE_1 : COLOR_GRAY_7,
    fontWeight: 'bold',
  }),
  youWant: {
    fontWeight: 500,
    marginTop: 16,
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
