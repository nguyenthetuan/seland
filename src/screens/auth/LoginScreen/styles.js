import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    marginTop: 24,
  },
  checkbox: {
    padding: 0,
  },
  forgotPassword: {
    color: COLORS.BLUE_2,
    marginRight: 8,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  nonmember: {
    color: COLORS.BLACK_2,
    marginVertical: 32,
    textAlign: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signup: {
    color: COLORS.BLUE_2,
    textDecorationLine: 'underline',
  },
});

export default styles;
