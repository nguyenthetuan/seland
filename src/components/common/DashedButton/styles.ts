import { StyleSheet } from 'react-native';

import { COLOR_BLUE_3 } from '../../../constants';

const styles = StyleSheet.create({
  btnDashed: {
    borderColor: COLOR_BLUE_3,
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: 7,
    paddingHorizontal: 14,
  },
  btnLabel: {
    color: COLOR_BLUE_3,
    fontSize: 14,
    lineHeight: 22,
  },
});

export default styles;
