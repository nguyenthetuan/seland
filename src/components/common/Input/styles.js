import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLACK_2,
  COLOR_BLUE_4,
  COLOR_GRAY_5,
  COLOR_RED,
} from '../../../constants/colors';

const styles = StyleSheet.create({
  error: {
    color: COLOR_RED,
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 0,
    marginVertical: 8,
  },
  input: isFocused => ({
    borderColor: isFocused ? COLOR_BLUE_4 : COLOR_GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    height: 40,
  }),
  label: {
    color: COLOR_BLACK_1,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  passwordPolicy: {
    color: COLOR_BLACK_2,
    marginBottom: 8,
    marginLeft: 8,
  },
  text: {
    fontSize: 16,
    // lineHeight: 24,
  },
});

export default styles;
