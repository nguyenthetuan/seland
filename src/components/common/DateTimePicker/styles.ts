import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  date: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
  },
  input: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  label: {
    marginBottom: 8,
  },
});

export default styles;
