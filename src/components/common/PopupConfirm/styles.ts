import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    color: COLORS.GREEN_1,
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
});

export default styles;
