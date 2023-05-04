import { StyleSheet } from 'react-native';

import { COLOR_GRAY_5, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  date: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
  },
  defaultInput: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    padding: 7,
    paddingLeft: 16,
  },
  label: {
    marginBottom: 8,
    marginVertical: 16,
  },
});

export default styles;
