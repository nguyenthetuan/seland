import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  acreage: {
    color: COLORS.BLACK_1,
    fontSize: 15,
    lineHeight: 24,
    paddingLeft: 8,
  },
  buttonLeft: {
    marginLeft: 8,
    marginRight: 4,
  },
  buttonMiddle: {
    marginHorizontal: 4,
  },
  buttonRight: {
    marginLeft: 4,
    marginRight: 8,
  },
  buttons: {
    marginVertical: 16,
  },
  call: {
    backgroundColor: COLORS.GREEN_5,
    borderRadius: 40,
    margin: 5,
    padding: 8,
  },
  content: {
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 8,
    marginHorizontal: 10,
  },
  flex: {
    flex: 1,
  },
  image: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 200,
    width: '100%',
  },
  info: {
    alignItems: 'center',
    marginLeft: 10,
  },
  inputContainerStyle: {
    marginBottom: -8,
    width: width * 0.44,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 16,
  },
  item: {
    borderColor: COLORS.BLACK_3,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10,
  },
  location: {
    color: COLORS.GRAY_7,
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
    marginTop: 3,
  },
  locationContainer: {
    marginHorizontal: 5,
  },
  price: {
    color: COLORS.RED_1,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 27,
  },
  priceContainer: {
    justifyContent: 'space-between',
    margin: 10,
  },
  rank: color => ({
    backgroundColor: color,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    height: 25,
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 5,
  }),
  tag: color => ({
    backgroundColor: color,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    height: 25,
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 5,
  }),
  rankContainer: {
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  rankName: {
    color: COLORS.WHITE,
    fontSize: 13,
    lineHeight: 15,
  },
  row: {
    flexDirection: 'row',
  },
  title: color => ({
    color,
    fontSize: 15,
    lineHeight: 18,
    marginHorizontal: 10,
    marginTop: 10,
    textTransform: 'uppercase',
    marginBottom: 8,
    alignItems: 'center',
  }),
  type: {
    color: COLORS.PURPLE_1,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  typeContainer: {
    backgroundColor: COLORS.PURPLE_2,
    borderRadius: 10,
    marginBottom: 8,
    marginLeft: 10,
    padding: 3,
    paddingHorizontal: 8,
    width: 80,
  },
  value: {
    marginLeft: 7,
  },
});

export default styles;
