import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_GRAY_5,
  COLOR_WHITE,
} from '../../../constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    flex: 1,
    height: 30,
    width: '100%',
  },
  label: {
    marginBottom: 8,
  },
  rowTextStyle: {
    color: COLOR_BLACK_1,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
  text: (value: any) => ({
    color: value ? COLOR_BLACK_1 : COLOR_GRAY_5,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  }),
});

export default styles;
