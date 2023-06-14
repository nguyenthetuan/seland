import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  blueText: {
    color: COLORS.BLUE_2,
    textDecorationLine: 'underline',
  },
  button: {
    marginVertical: 24,
  },
  centerText: {
    textAlign: 'center',
  },
  container: {
    marginHorizontal: 8,
  },
  grayText: {
    color: COLORS.BLACK_2,
  },
  hadAccount: {
    marginBottom: 16,
    marginTop: 32,
  },
  otp: {
    borderColor: COLORS.GRAY_5,
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
