import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLUE_3,
  COLOR_GRAY_3,
  COLOR_GRAY_4,
  COLOR_GREEN_1,
  COLOR_ORANGE_1,
  COLOR_ORANGE_2,
  COLOR_ORANGE_4,
  COLOR_WHITE,
} from '../../../constants';

const styles = StyleSheet.create({
  boxAvatar: {
    backgroundColor: COLOR_ORANGE_4,
  },
  boxHeaderLeft: {
    flexDirection: 'row',
  },
  boxInfo: {
    marginLeft: 15,
  },
  boxItem: {
    borderColor: COLOR_GRAY_4,
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
    color: COLOR_BLUE_3,
    fontSize: 14,
    lineHeight: 22,
  },
  btnRank: {
    borderColor: COLOR_BLUE_3,
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: 7,
    paddingHorizontal: 14,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: COLOR_GRAY_4,
    height: 1,
    marginHorizontal: 10,
    width: '95%',
  },
  myPage: {
    color: COLOR_BLUE_3,
    textDecorationLine: 'underline',
  },
  name: {
    color: COLOR_BLACK_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    marginRight: 7,
  },
  payment: {
    alignItems: 'center',
    backgroundColor: COLOR_GREEN_1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    flexDirection: 'row',
    height: 38,
    justifyContent: 'center',
  },
  phone: {
    color: COLOR_GRAY_3,
    fontSize: 14,
  },
  text: {
    color: COLOR_ORANGE_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  txtPayment: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  valuePromotion: {
    color: COLOR_GREEN_1,
    fontWeight: 'bold',
  },
  valueSurplus: {
    color: COLOR_ORANGE_2,
    fontWeight: 'bold',
  },
});

export default styles;
