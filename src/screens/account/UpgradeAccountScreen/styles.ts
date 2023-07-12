import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 130,
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
  bottomButton: {
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
  },
  loadingText: {
    color: COLORS.BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
