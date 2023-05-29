import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLACK_2,
  COLOR_BLACK_3,
  COLOR_BLUE_1,
  COLOR_GRAY_7,
  COLOR_GREEN_3,
  COLOR_GREEN_4,
  COLOR_GREEN_5,
  COLOR_ORANGE_5,
  COLOR_PURPLE_1,
  COLOR_PURPLE_2,
  COLOR_RED_1,
  COLOR_WHITE,
} from '../../../../constants';

const styles = StyleSheet.create({
  acreage: {
    color: COLOR_BLACK_1,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  boxContent: {
    paddingHorizontal: 10,
  },
  boxFooterProject: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  boxImage: {
    height: 130,
    width: '100%',
  },
  boxLocation: {
    flexDirection: 'row',
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
    marginTop: 10,
  },
  boxRank: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  boxSale: {
    backgroundColor: COLOR_GREEN_3,
    borderRadius: 10,
    height: 16,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  boxScale: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 6,
  },
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    marginTop: 10,
  },
  boxType: {
    backgroundColor: COLOR_GREEN_4,
    borderRadius: 10,
    marginBottom: 8,
    marginRight: 5,
    marginTop: 6,
    padding: 3,
    paddingHorizontal: 10,
  },
  boxTypeHouse: {
    backgroundColor: COLOR_PURPLE_2,
    borderRadius: 10,
    marginBottom: 3,
    paddingTop: 5,
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
    width: 196,
  },
  content: {
    fontSize: 12,
    lineHeight: 15,
    marginVertical: 8,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 5,
  },
  image: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: '100%',
    width: '100%',
  },
  info: {
    padding: 10,
  },
  itemInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 5,
  },
  location: {
    color: COLOR_GRAY_7,
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
  },
  love: {
    paddingLeft: 10,
  },
  map: {
    fontSize: 14,
    lineHeight: 15,
    marginLeft: 2,
  },
  monopoly: {
    color: COLOR_WHITE,
    fontSize: 10,
    lineHeight: 12,
  },
  price: {
    color: COLOR_RED_1,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  projectName: {
    width: '50%',
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
  sale: {
    color: COLOR_WHITE,
    fontSize: 9,
    lineHeight: 11,
  },
  scale: {
    fontSize: 12,
    lineHeight: 15,
  },
  time: {
    color: COLOR_BLACK_2,
    fontSize: 12,
    lineHeight: 20,
    marginTop: 7,
  },
  title: color => ({
    color,
    fontSize: 15,
    lineHeight: 18,
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
    fontSize: 11,
    lineHeight: 15,
    marginLeft: 4,
  },
});

export default styles;
