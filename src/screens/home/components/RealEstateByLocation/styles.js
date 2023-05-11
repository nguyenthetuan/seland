import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLACK_3,
  COLOR_GRAY_1,
  COLOR_WHITE,
} from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxImage: {
    height: width * 0.46,
    width: '100%',
  },
  boxItem: {
    borderColor: COLOR_BLACK_3,
    borderRadius: 8,
    borderWidth: 1,
    height: width * 0.46,
  },
  boxItem2: {
    marginBottom: 5,
    width: '100%',
  },
  boxItem3: {
    marginVertical: 5,
    width: width * 0.46,
  },
  btnSeeAll: {
    borderColor: COLOR_GRAY_1,
    borderRadius: 5,
    height: 32,
    marginBottom: 1,
    marginTop: 10,
    padding: 0,
    width: width * 0.95,
  },
  image: {
    borderRadius: 7,
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
