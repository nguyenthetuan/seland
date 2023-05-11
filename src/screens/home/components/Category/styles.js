import { StyleSheet } from 'react-native';

import { COLOR_BLUE_2 } from '../../../../constants';

const styles = StyleSheet.create({
  boxLabelCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
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
    color: COLOR_BLUE_2,
  },
});

export default styles;
