import { StyleSheet } from 'react-native';

import { COLOR_GRAY_5, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: COLOR_GRAY_5,
  },
  outline: (borderColor: string) => ({
    borderColor,
    borderWidth: 1,
  }),
  title: (color, outline) => ({
    color: outline ? color : COLOR_WHITE,
    fontWeight: 500,
  }),
  wrap: {
    flexDirection: 'row'
  }
});

export default styles;
