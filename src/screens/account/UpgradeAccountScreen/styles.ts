import { StyleSheet } from 'react-native';

import { COLOR_GRAY_4, COLOR_ORANGE_6 } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 100,
  },
  inactiveDotStyle: {
    width: 8,
    height: 8,
    backgroundColor: COLOR_GRAY_4,
  },
  dotStyle: {
    width: 24,
    height: 8,
    borderRadius: 20,
    backgroundColor: COLOR_ORANGE_6,
  },
});

export default styles;
