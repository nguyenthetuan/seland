import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    flex: 1,
    height: 30,
    width: '100%',
  },
  label: {
    marginBottom: 8,
  },
  rowTextStyle: {
    color: COLORS.BLACK_1,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
  text: {
    color: COLORS.BLACK_1,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
});

export default styles;
