import { StyleSheet } from 'react-native';
import {
  COLOR_BLACK_1,
  COLOR_BLACK_3,
  COLOR_GRAY_7,
  COLOR_GREEN_3,
  COLOR_GREEN_4,
  COLOR_GREEN_5,
  COLOR_ORANGE_5,
  COLOR_PURPLE_1,
  COLOR_PURPLE_2,
  COLOR_RED_1,
  COLOR_WHITE,
} from '../../../../../constants';

const styles = StyleSheet.create({
  acreage: {
    color: COLOR_BLACK_1,
    fontSize: 12,
    lineHeight: 14,
    paddingLeft: 8,
    fontWeight: 400,
  },
  boxImage: {
    height: 200,
    width: '100%',
  },
  boxItem: {
    borderColor: COLOR_BLACK_3,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10,
  },
  boxLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  boxMonopoly: {
    backgroundColor: COLOR_ORANGE_5,
    borderRadius: 15,
    elevation: 5,
    justifyContent: 'center',
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
    marginBottom: 6,
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
    marginRight: 10,
    padding: 3,
    paddingHorizontal: 10,
  },
  boxTypeHouse: {
    backgroundColor: COLOR_PURPLE_2,
    borderRadius: 10,
    marginBottom: 8,
    padding: 3,
    width: 70,
  },
  call: {
    backgroundColor: COLOR_GREEN_5,
    borderRadius: 40,
    margin: 5,
    padding: 8,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
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
    marginLeft: 10,
  },
  location: {
    color: COLOR_GRAY_7,
    fontSize: 12,
    lineHeight: 20,
    marginLeft: 5,
    maxWidth: 300,
  },
  love: {
    paddingLeft: 10,
  },
  monopoly: {
    color: COLOR_WHITE,
    fontSize: 12,
    lineHeight: 15,
  },
  price: {
    color: COLOR_RED_1,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },

  rankName: {
    color: COLOR_WHITE,
    fontSize: 13,
    lineHeight: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  typeHouse: {
    color: COLOR_PURPLE_1,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  boxName: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  boxScale: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  scale: {
    fontSize: 12,
    lineHeight: 14,
    marginLeft: 5,
  },
  status: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: COLOR_GREEN_3,
    borderRadius: 15,
  },
  textStatus: {
    fontSize: 10,
    lineHeight: 12,
    color: COLOR_WHITE,
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textMap: {
    marginLeft: 8,
    fontSize: 13,
    lineHeight: 24,
  },
});

export default styles;
