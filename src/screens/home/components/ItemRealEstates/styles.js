import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  acreage: {
    color: COLORS.BLACK_1,
    fontSize: 15,
    lineHeight: 24,
    paddingLeft: 8,
  },
  boxImage: {
    height: 200,
    width: '100%',
  },
  boxItem: {
    borderColor: COLORS.BLACK_3,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10,
  },
  boxLocation: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  boxMonopoly: {
    backgroundColor: COLORS.ORANGE_5,
    borderRadius: 15,
    elevation: 5,
    justifyContent: 'center',
    padding: 3,
    paddingHorizontal: 8,
    shadowColor: COLORS.BLACK_1,
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
    margin: 10,
  },
  boxRank: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
  boxType: {
    backgroundColor: COLORS.GREEN_4,
    borderRadius: 10,
    marginBottom: 8,
    marginRight: 10,
    padding: 3,
    paddingHorizontal: 10,
  },
  boxTypeHouse: {
    backgroundColor: COLORS.PURPLE_2,
    borderRadius: 10,
    marginBottom: 8,
    marginLeft: 10,
    padding: 3,
    paddingHorizontal: 8,
    width: 80,
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
    color: COLORS.GRAY_7,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
    marginTop: 3,
  },
  love: {
    paddingLeft: 10,
  },
  monopoly: {
    color: COLORS.WHITE,
    fontSize: 12,
    lineHeight: 15,
  },
  price: {
    color: COLORS.RED_1,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 27,
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
    color: COLORS.WHITE,
    fontSize: 13,
    lineHeight: 15,
  },
  row: {
    flexDirection: 'row',
  },
  time: {
    color: COLORS.BLACK_2,
    fontSize: 14,
    lineHeight: 20,
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
    color: COLORS.BLUE_1,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  typeHouse: {
    color: COLORS.PURPLE_1,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
  },
  valueInfo: {
    marginLeft: 7,
  },
});

export default styles;
