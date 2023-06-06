import { StyleSheet } from 'react-native';

import { COLOR_GRAY_5, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  date: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
  },
  input: {
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  label: {
    marginBottom: 8,
  },
});

export default styles;
