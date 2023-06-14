import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxHeader: {
    alignItems: 'flex-start',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

export default styles;
