import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLACK_2,
  COLOR_BLACK_3,
  COLOR_BLUE_1,
  COLOR_PURPLE_1,
  COLOR_PURPLE_2,
  COLOR_RED,
  COLOR_WHITE,
} from '../../../../constants';

const styles = StyleSheet.create({
  acreage: {
    color: COLOR_BLACK_1,
    fontSize: 15,
    lineHeight: 18,
    paddingLeft: 8,
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
    marginHorizontal: 5,
  },
  boxPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  content: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  distance: {
    width: 10,
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
  label: {
    color: '#52C41A',
    fontSize: 15,
    lineHeight: 18,
    marginHorizontal: 10,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  location: {
    color: '#595959',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
    marginTop: 3,
  },
  monopoly: {
    backgroundColor: '#FA8C16',
    borderRadius: 10,
    color: COLOR_WHITE,
    elevation: 5,
    fontSize: 12,
    lineHeight: 15,
    padding: 3,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
  },
  price: {
    color: COLOR_RED,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
  },
  time: {
    color: COLOR_BLACK_2,
    fontSize: 14,
    lineHeight: 20,
  },
  type: {
    backgroundColor: '#E6F7FF',
    borderRadius: 10,
    color: COLOR_BLUE_1,
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 8,
    marginRight: 10,
    padding: 3,
    paddingHorizontal: 10,
    textAlign: 'center',
    // width: 80,
  },
  typeHouse: {
    backgroundColor: COLOR_PURPLE_2,
    borderRadius: 10,
    color: COLOR_PURPLE_1,
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 8,
    marginLeft: 10,
    padding: 3,
    paddingHorizontal: 8,
    textAlign: 'center',
    width: 80,
  },
  valueInfo: {
    marginLeft: 7,
  },
});

export default styles;
