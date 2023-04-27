import { StyleSheet } from 'react-native';

import { COLOR_BLUE_2 } from '../../../constants';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    marginTop: 24,
  },
  hadAccount: {
    marginVertical: 16,
    textAlign: 'center',
  },
  login: {
    color: COLOR_BLUE_2,
    textDecorationLine: 'underline',
  },
  tnc1: {
    fontSize: 12,
    lineHeight: 20,
    margin: 8,
  },
  tnc2: {
    color: COLOR_BLUE_2,
  },
});

export default styles;
