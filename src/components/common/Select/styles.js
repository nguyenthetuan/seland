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
    width: '100%',
  },
  label: {
    marginBottom: 8,
  },
  row: {
    height: 40,
  },
  text: {
    color: COLOR_BLACK_1,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
});

export default styles;
