import { StyleSheet } from 'react-native';

import { COLOR_BLACK_2, COLOR_BLUE_1 } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  heading: {
    color: COLOR_BLUE_1,
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 32,
  },
  headingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  hello: {
    color: COLOR_BLACK_2,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
});

export default styles;
