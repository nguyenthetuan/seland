import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  blueUnderlineText: {
    color: COLORS.BLUE_2,
    textDecorationLine: 'underline',
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 24,
  },
  error: {
    color: COLORS.RED_1,
    marginLeft: 8,
  },
  hadAccount: {
    marginVertical: 16,
    textAlign: 'center',
  },
});

export default styles;
