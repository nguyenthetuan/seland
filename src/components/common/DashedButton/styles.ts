import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  btnDashed: {
    borderColor: COLORS.BLUE_3,
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: 7,
    paddingHorizontal: 14,
    alignItems: 'center'
  },
  btnLabel: {
    color: COLORS.BLUE_3,
    fontSize: 14,
    lineHeight: 22,
  },
  wrapper: {
    flexDirection: 'row',
  },
  iconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  }
});

export default styles;
