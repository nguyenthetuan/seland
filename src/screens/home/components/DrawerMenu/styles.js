import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  boxClose: {
    paddingTop: 40,
    width: 60,
  },
  btnMenu: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  container: {
    backgroundColor: COLORS.BLACK_2,
    flexDirection: 'row',
    height: '100%',
  },
  drawer: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    paddingTop: 40,
  },
  textMenu: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default styles;
