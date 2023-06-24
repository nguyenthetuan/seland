import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  heading: {
    color: COLORS.BLUE_1,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
  },
  headingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  hello: {
    color: COLORS.BLACK_2,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
});

export default styles;
