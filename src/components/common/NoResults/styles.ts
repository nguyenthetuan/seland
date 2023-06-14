import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '40%',
  },
  noResults: {
    color: COLORS.GRAY_1,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
