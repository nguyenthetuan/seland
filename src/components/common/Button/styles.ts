import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: COLORS.GRAY_5,
  },
  outline: (borderColor: string) => ({
    borderColor,
    borderWidth: 1,
  }),
  title: (color, outline) => ({
    color: outline ? color : COLORS.WHITE,
    fontWeight: '500',
  }),
  wrap: {
    flexDirection: 'row',
  },
  wrapIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
});

export default styles;
