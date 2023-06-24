import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 150,
  },
  list: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    flex: 1,
  },

  spinnerTextStyle: {
    color: COLORS.BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
  itemWarehouseLand: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});

export default styles;
