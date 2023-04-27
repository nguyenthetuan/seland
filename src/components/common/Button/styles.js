import { StyleSheet } from 'react-native';

import { COLOR_GRAY_5, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: COLOR_GRAY_5,
  },
  title: {
    color: COLOR_WHITE,
    fontWeight: 500,
  },
});

export default styles;
