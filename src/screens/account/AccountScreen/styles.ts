import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  boxAvatar: {
    backgroundColor: COLORS.ORANGE_4,
  },
  boxHeaderLeft: {
    flexDirection: 'row',
    width: '70%',
  },
  boxInfo: {
    marginLeft: 15,
  },
  boxItem: {
    borderColor: COLORS.GRAY_4,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 15,
  },
  boxLabelItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxName: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxRankAccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnLabel: {
    alignItems: 'center',
    color: COLORS.BLUE_3,
    fontSize: 14,
    lineHeight: 22,
  },
  btnRank: {
    borderColor: COLORS.BLUE_3,
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: 7,
    paddingHorizontal: 14,
  },
  buttonLogout: {
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  containerScroll: {
    paddingBottom: 50,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 8,
  },
  line: {
    backgroundColor: COLORS.GRAY_4,
    height: 1,
    marginHorizontal: 10,
    width: '95%',
  },
  myPage: {
    color: COLORS.BLUE_3,
    textDecorationLine: 'underline',
  },
  name: {
    color: COLORS.BLACK_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    marginRight: 7,
    width: '70%',
  },
  payment: {
    alignItems: 'center',
    backgroundColor: COLORS.GREEN_1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    flexDirection: 'row',
    height: 38,
    justifyContent: 'center',
  },
  phone: {
    color: COLORS.GRAY_3,
    fontSize: 14,
  },
  safe: {
    backgroundColor: COLORS.WHITE,
  },
  text: {
    color: COLORS.ORANGE_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  txtPayment: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  valuePromotion: {
    color: COLORS.GREEN_1,
    fontWeight: 'bold',
  },
  valueSurplus: {
    color: COLORS.ORANGE_2,
    fontWeight: 'bold',
  },
});

export default styles;
