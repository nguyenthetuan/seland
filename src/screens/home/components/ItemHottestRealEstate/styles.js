import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLACK_2,
  COLOR_BLACK_3,
  COLOR_BLUE_1,
  COLOR_GRAY_7,
  COLOR_GREEN_4,
  COLOR_GREEN_5,
  COLOR_ORANGE_5,
  COLOR_PURPLE_1,
  COLOR_PURPLE_2,
  COLOR_RED,
  COLOR_WHITE,
} from '../../../../constants';

const styles = StyleSheet.create({
  acreage: {
    color: COLOR_BLACK_1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    paddingLeft: 8,
  },
  boxImage: {
    height: 130,
    width: '100%',
  },
  boxLocation: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  boxMonopoly: {
    backgroundColor: COLOR_ORANGE_5,
    borderRadius: 3,
    elevation: 5,
    height: 20,
    justifyContent: 'center',
    margin: 8,
    padding: 3,
    paddingHorizontal: 8,
    shadowColor: COLOR_BLACK_1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  boxPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  boxRank: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  boxType: {
    backgroundColor: COLOR_GREEN_4,
    borderRadius: 10,
    marginBottom: 8,
    marginRight: 5,
    padding: 3,
    paddingHorizontal: 10,
  },
  boxTypeHouse: {
    backgroundColor: COLOR_PURPLE_2,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 10,
    padding: 3,
    width: 60,
  },
  call: {
    backgroundColor: COLOR_GREEN_5,
    borderRadius: 40,
    margin: 8,
    padding: 5,
  },
  container: {
    borderColor: COLOR_BLACK_3,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 10,
    marginVertical: 10,
    width: 192,
  },
  content: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginHorizontal: 10,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: '100%',
    width: '100%',
  },
  info: {
    padding: 10,
  },
  itemInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  location: {
    color: COLOR_GRAY_7,
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 8,
  },
  love: {
    paddingLeft: 10,
  },
  monopoly: {
    color: COLOR_WHITE,
    fontSize: 10,
    lineHeight: 12,
  },
  price: {
    color: COLOR_RED,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
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
  rankName: {
    color: COLOR_WHITE,
    fontSize: 13,
    lineHeight: 15,
  },
  row: {
    flexDirection: 'row',
  },
  time: {
    color: COLOR_BLACK_2,
    fontSize: 12,
    lineHeight: 20,
  },
  title: color => ({
    color,
    fontSize: 15,
    lineHeight: 18,
    marginHorizontal: 10,
    marginTop: 10,
    textTransform: 'uppercase',
  }),
  type: {
    color: COLOR_BLUE_1,
    fontSize: 9,
    lineHeight: 15,
    textAlign: 'center',
  },
  typeHouse: {
    color: COLOR_PURPLE_1,
    fontSize: 9,
    lineHeight: 15,
    textAlign: 'center',
  },
  valueInfo: {
    marginLeft: 7,
  },
});

export default styles;
