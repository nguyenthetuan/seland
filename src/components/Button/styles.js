import { StyleSheet } from 'react-native';

import { COLOR_GRAY, COLOR_WHITE } from '../../constants';

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: COLOR_GRAY,
  },
  title: {
    color: COLOR_WHITE,
    fontWeight: 500,
  },
});

export default styles;
