import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants';

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
    color: COLORS.BLUE_2,
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
    height: 20,
    backgroundColor: COLORS.GREEN_4,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    paddingLeft: 4,
    paddingRight: 4,
  },
  buyText: {
    fontSize: 12,
    color: COLORS.BLUE_1,
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
    color: COLORS.RED_2,
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
    borderColor: COLORS.ORANGE_2,
    borderRadius: 5,
    paddingHorizontal: 11,
    paddingVertical: 3,
  },
  calculatorText: {
    color: COLORS.ORANGE_2,
    fontWeight: '500',
    marginLeft: 11,
    fontSize: 16,
  },
  BoxListInfo: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_5,
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
    borderColor: COLORS.GRAY_5,
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
    marginTop: 10,
  },
  aboutOpacity: {},
  aboutOpacityText: {},
  showMoreContent: {
    height: 'auto',
  },
  showContent: {
    maxHeight: 100,
    overflow: 'hidden',
    marginBottom: 10,
    zIndex: 1,
  },
  viewOpacity: {
    marginTop: -40,
    opacity: 0.7,
    zIndex: 2,
    height: 30,
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
