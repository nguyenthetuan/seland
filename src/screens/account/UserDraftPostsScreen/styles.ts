import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  list: {
    marginVertical: 10,
  },
  loadingText: {
    color: COLORS.BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
  marginHorizontal: {
    marginHorizontal: 8,
  },

  whiteBackground: {
    backgroundColor: COLORS.WHITE,
  },
});

export default styles;
