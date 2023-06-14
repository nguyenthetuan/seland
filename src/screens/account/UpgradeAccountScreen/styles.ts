import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  inactiveDotStyle: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.GRAY_4,
  },
  dotStyle: {
    width: 24,
    height: 8,
    borderRadius: 20,
    backgroundColor: COLORS.ORANGE_6,
  },
});

export default styles;
