import { StyleSheet } from 'react-native';

import { COLOR_BLUE_2, COLOR_RED } from '../../../constants';

const styles = StyleSheet.create({
  blueUnderlineText: {
    color: COLOR_BLUE_2,
    textDecorationLine: 'underline',
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 24,
  },
  error: {
    color: COLOR_RED,
    marginLeft: 8,
  },
  hadAccount: {
    marginVertical: 16,
    textAlign: 'center',
  },
});

export default styles;
