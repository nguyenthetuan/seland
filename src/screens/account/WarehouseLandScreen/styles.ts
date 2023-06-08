import { StyleSheet } from 'react-native';

import { COLOR_BLUE_1, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 50,
  },
  list: {
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 10,
  },

  spinnerTextStyle: {
    color: COLOR_BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
