import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLACK_2,
  COLOR_BLUE_1,
  COLOR_BLUE_5,
  COLOR_GRAY_1,
  COLOR_GRAY_9,
} from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxContent: {
    flex: 1,
  },
  boxItem: {
    marginBottom: 10,
  },
  boxItem1: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 8,
  },
  btnSeeAll: {
    alignSelf: 'center',
    borderColor: COLOR_GRAY_1,
    borderRadius: 5,
    height: 32,
    marginTop: 10,
    padding: 0,
    width: width * 0.94,
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  description: {
    color: COLOR_GRAY_9,
    marginTop: 6,
  },
  image: {
    borderRadius: 4,
    height: 200,
    marginBottom: 10,
    width: '100%',
  },
  image1: {
    borderRadius: 4,
    height: 90,
    marginRight: 10,
    width: 135,
  },
  name: {
    color: COLOR_BLUE_1,
    fontSize: 13,
    lineHeight: 18,
  },
  time: {
    color: COLOR_BLACK_2,
    fontSize: 13,
    lineHeight: 18,
  },
  title: {
    color: COLOR_BLUE_1,
    fontWeight: 'bold',
    marginTop: 10,
  },
  title1: {
    color: COLOR_BLUE_5,
    fontWeight: 'bold',
    marginTop: 6,
  },
  txtSeeAll: {
    color: COLOR_GRAY_1,
    fontSize: 14,
  },
});

export default styles;
