import { StyleSheet } from 'react-native';

import { COLOR_BLUE_2, COLOR_RED_1 } from '../../../constants';

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
    color: COLOR_RED_1,
    marginLeft: 8,
  },
  hadAccount: {
    marginVertical: 16,
    textAlign: 'center',
  },
});

export default styles;
