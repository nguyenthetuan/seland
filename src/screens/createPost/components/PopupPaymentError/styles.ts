import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnPopupAdd: {
    width: width * 0.83,
    alignSelf: 'center',
    marginBottom: 16,
  },
  value: {
    // color: COLORS.RED_1,
    fontWeight: '500',
  },
  totalPrice: {
    color: COLORS.RED_1,
    fontWeight: '700',
  },
  boxPopup: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    padding: 20,
    width: width * 0.96,
  },
  btnPopup: {
    width: width * 0.4,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BLACK_2,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  posting: {
    color: COLORS.BLACK_1,
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 10,
    marginTop: 16,
    textAlign: 'center',
  },
  youPost: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  boxItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  labelItem: {
    fontWeight: '500',
  },
  valueItem: {
    fontSize: 14,
    lineHeight: 22,
  },
  valueSurplus: {
    color: COLORS.ORANGE_2,
    fontWeight: 'bold',
  },
});

export default styles;
