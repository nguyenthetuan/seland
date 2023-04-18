import { StyleSheet } from 'react-native';

import { COLOR_BLACK_2, COLOR_BLUE_2, COLOR_GRAY } from '../../constants';

const styles = StyleSheet.create({
  blueText: {
    color: COLOR_BLUE_2,
    textDecorationLine: 'underline',
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 24,
  },
  centerText: {
    textAlign: 'center',
  },
  grayText: {
    color: COLOR_BLACK_2,
  },
  hadAccount: {
    marginBottom: 16,
    marginTop: 32,
  },
  otp: {
    borderColor: COLOR_GRAY,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  phoneNumber: {
    alignItems: 'center',
  },
  smallText: {
    fontSize: 12,
    lineHeight: 20,
  },
});

export default styles;
