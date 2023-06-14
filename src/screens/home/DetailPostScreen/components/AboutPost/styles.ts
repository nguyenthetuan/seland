import { StyleSheet } from 'react-native';
import {
  COLOR_BLUE_1,
  COLOR_BLUE_2,
  COLOR_GRAY_5,
  COLOR_GREEN_4,
  COLOR_ORANGE_2,
  COLOR_RED_2,
} from '../../../../../constants';

const styles = StyleSheet.create({
  aboutPost: {
    padding: 10,
  },
  seeMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textViewMap: {
    color: COLOR_BLUE_2,
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 20,
  },
  icon: {
    marginLeft: 16,
  },
  aboutPostTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 5,
  },
  boxBuy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  buy: {
    width: 37,
    height: 20,
    backgroundColor: COLOR_GREEN_4,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buyText: {
    fontSize: 12,
    color: COLOR_BLUE_1,
    lineHeight: 20,
  },
  buyTime: {
    fontSize: 14,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.45)',
  },
  Boxlocation: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  textAddress: {
    marginLeft: 7,
    marginTop: -3,
  },
  BoxPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  BoxPriceRed: {
    color: COLOR_RED_2,
    marginRight: 20,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
  },
  BoxPriceGray: {
    fontSize: 18,
    lineHeight: 28,
    marginRight: 20,
  },
  calculator: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR_ORANGE_2,
    borderRadius: 5,
    paddingHorizontal: 11,
    paddingVertical: 3,
  },
  calculatorText: {
    color: COLOR_ORANGE_2,
    fontWeight: '500',
    marginLeft: 11,
    fontSize: 16,
  },
  BoxListInfo: {
    borderWidth: 1,
    borderColor: COLOR_GRAY_5,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  itemInfo: {
    marginRight: 25,
    marginBottom: 14,
    minWidth: 100,
  },
  itemInfoLast: {
    marginBottom: 14,
  },

  itemIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoValue: {
    marginLeft: 8,
    fontWeight: '700',
    fontSize: 16,
  },
  infoTitle: {
    fontSize: 14,
    lineHeight: 24,
  },
  BoxAbout: {
    borderWidth: 1,
    borderColor: COLOR_GRAY_5,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  aboutTitle: {
    fontWeight: '700',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 15,
    marginBottom: 10,
  },
  aboutButton: {
    width: 109,
    borderRadius: 5,
  },
  aboutOpacity: {},
  aboutOpacityText: {},
});

export default styles;
