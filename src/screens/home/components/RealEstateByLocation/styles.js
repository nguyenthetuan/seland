import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLACK_3,
  COLOR_GRAY_1,
  COLOR_WHITE,
} from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxItem: {
    borderColor: COLOR_BLACK_3,
    borderRadius: 8,
    borderWidth: 1,
    height: width * 0.46,
  },
  btnSeeAll: {
    borderColor: COLOR_GRAY_1,
    borderRadius: 5,
    height: 32,
    marginTop: 10,
    width: width * 0.95,
  },
  name: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  numberPost: {
    color: COLOR_WHITE,
    fontSize: 14,
    lineHeight: 18,
    marginHorizontal: 20,
  },
  realEstateByLocation: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  txtSeeAll: {
    color: COLOR_GRAY_1,
    fontSize: 14,
  },
});

export default styles;
