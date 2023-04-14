import { StyleSheet } from 'react-native';

import { COLOR_BLACK_2, COLOR_BLUE_2, COLOR_RED } from '../../constants';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    marginTop: 24,
  },
  checkbox: {
    padding: 0,
  },
  error: {
    color: COLOR_RED,
    marginTop: 8,
    textAlign: 'center',
  },
  hadAccount: {
    color: COLOR_BLACK_2,
    marginVertical: 16,
    textAlign: 'center',
  },
  login: {
    color: COLOR_BLUE_2,
    textDecorationLine: 'underline',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
