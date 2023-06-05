import { StyleSheet } from 'react-native';

import { COLOR_BLUE_1, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  list: {
    marginVertical: 10,
  },
  loadingText: {
    color: COLOR_BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
  marginHorizontal: {
    marginHorizontal: 8,
  },

  whiteBackground: {
    backgroundColor: COLOR_WHITE,
  },
});

export default styles;
