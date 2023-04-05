import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLUE_3,
  COLOR_GRAY,
} from '../../constants/colors';

const styles = StyleSheet.create({
  input: isFocused => ({
    borderColor: isFocused ? COLOR_BLUE_3 : COLOR_GRAY,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  }),
  label: {
    color: COLOR_BLACK_1,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
});

export default styles;
