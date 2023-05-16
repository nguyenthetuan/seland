import { StyleSheet } from 'react-native';

import { COLOR_GRAY_2, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
  },
  searchInput: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectButton: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 4,
    height: 40,
  },
});

export default styles;
