import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  boxLabelCategory: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  container: {
    marginBottom: 17,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  row: {
    flexDirection: 'row',
  },
  seeAll: {
    color: COLORS.BLUE_2,
  },
});

export default styles;
