import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLACK_2,
  COLOR_BLUE_4,
  COLOR_GRAY_5,
  COLOR_RED_1,
} from '../../../constants/colors';

const styles = StyleSheet.create({
  boxLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  containerInput: {
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  error: {
    color: COLOR_RED_1,
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 0,
    marginVertical: 8,
  },
  input: (isFocused: boolean) => ({
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
