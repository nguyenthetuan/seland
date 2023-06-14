import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

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
    borderColor: COLORS.GRAY_1,
    borderRadius: 5,
    height: 32,
    marginBottom: 5,
    marginTop: 10,
    padding: 0,
    width: width * 0.94,
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  description: {
    color: COLORS.GRAY_9,
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
    color: COLORS.BLUE_1,
    fontSize: 13,
    lineHeight: 18,
  },
  time: {
    color: COLORS.BLACK_2,
    fontSize: 13,
    lineHeight: 18,
  },
  title: {
    color: COLORS.BLUE_1,
    fontWeight: 'bold',
    marginTop: 10,
  },
  title1: {
    color: COLORS.BLUE_5,
    fontWeight: 'bold',
    marginTop: 6,
  },
  txtSeeAll: {
    color: COLORS.GRAY_1,
    fontSize: 14,
  },
});

export default styles;
