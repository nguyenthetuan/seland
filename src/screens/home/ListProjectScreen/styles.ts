import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  boxListPost: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  list: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
  },
  spinnerTextStyle: {
    color: COLORS.BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
