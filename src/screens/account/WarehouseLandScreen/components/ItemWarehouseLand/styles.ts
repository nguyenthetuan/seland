import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLACK_3,
  COLOR_BLUE_1,
  COLOR_BLUE_6,
  COLOR_GRAY_3,
  COLOR_GRAY_7,
  COLOR_GREEN_4,
  COLOR_GREEN_5,
  COLOR_ORANGE_5,
  COLOR_ORANGE_6,
  COLOR_PURPLE_1,
  COLOR_PURPLE_2,
  COLOR_RED_1,
  COLOR_WHITE,
} from '../../../../../constants';

const styles = StyleSheet.create({
  acreage: {
    color: COLOR_BLACK_1,
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 400,
    marginLeft: 8,
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
    zIndex: 0,
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
    marginBottom: 10,
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
    marginLeft: 10,
    padding: 3,
    paddingHorizontal: 8,
    width: 80,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginHorizontal: 10,
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
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 5,
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
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },

  rankName: {
    color: COLOR_WHITE,
    fontSize: 13,
    lineHeight: 15,
  },
  row: {
    flexDirection: 'row',
  },

  type: {
    color: COLOR_BLUE_1,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  typeHouse: {
    color: COLOR_PURPLE_1,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  valueInfo: {
    marginLeft: 7,
  },
  boxStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_GREEN_5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
  },
  boxStatusText: {
    fontSize: 13,
    color: COLOR_WHITE,
    fontWeight: '400',
    marginLeft: 5,
  },
  boxVirtualText: {
    fontSize: 13,
    color: COLOR_WHITE,
    fontWeight: '400',
  },

  boxVirtualNews: {
    backgroundColor: COLOR_RED_1,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    padding: 3,
  },
  headerImage: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    width: '100%',
  },
  boxBreadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  boxBreadcrumbText: {
    fontSize: 12,
    lineHeight: 24,
    color: COLOR_BLUE_6,
    textDecorationLine: 'underline',
  },
  boxBreadcrumbIcon: {
    fontSize: 12,
    lineHeight: 24,
    color: COLOR_BLUE_6,
    marginHorizontal: 3,
  },
  content: {
    padding: 10,
  },
  freeNews: {
    backgroundColor: COLOR_ORANGE_5,
    paddingHorizontal: 8,
    borderRadius: 100,
    shadowColor: COLOR_BLACK_1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  freeNewsText: {
    color: COLOR_WHITE,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  infoWarehouse: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  nameWarehouse: {
    backgroundColor: COLOR_GREEN_4,
    paddingHorizontal: 6,
    borderRadius: 74,
  },
  nameWarehouseText: {
    color: COLOR_GRAY_7,
    fontSize: 12,
  },
  codeTitle: {
    color: COLOR_GRAY_7,
    fontSize: 14,
  },
  codeText: {
    fontWeight: '700',
    color: COLOR_GRAY_7,
    fontSize: 14,
  },
  dateTime: {
    color: COLOR_GRAY_3,
    fontSize: 12,
  },
  actionButton: {
    backgroundColor: COLOR_GRAY_7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR_GRAY_7,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
  },
  action: { color: COLOR_WHITE, fontSize: 16, marginRight: 5, marginTop: -4 },
  actionText: { color: COLOR_WHITE, fontSize: 16, fontWeight: '700' },
  time: {
    marginLeft: 10,
  },
  buttonPushNews: {
    marginHorizontal: 10,
    marginBottom: 18,
    backgroundColor: COLOR_ORANGE_6,
    borderWidth: 0,
  },
  titleButton: {
    marginLeft: 5,
    fontWeight: 600,
  },
});

export default styles;
