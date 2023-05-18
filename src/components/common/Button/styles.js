import { StyleSheet } from 'react-native';

import { COLOR_GRAY_5, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: COLOR_GRAY_5,
  },
  outline: borderColor => ({
    borderColor,
    borderWidth: StyleSheet.hairlineWidth,
  }),
  title: (color, outline) => ({
    color: outline ? color : COLOR_WHITE,
    fontWeight: 500,
  }),
});

export default styles;
