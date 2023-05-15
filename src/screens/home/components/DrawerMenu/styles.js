import { StyleSheet } from 'react-native';

import { COLOR_BLACK_2, COLOR_WHITE } from '../../../../constants';

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
    backgroundColor: COLOR_BLACK_2,
    flexDirection: 'row',
    height: '100%',
  },
  drawer: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    paddingTop: 40,
  },
  textMenu: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
  },
});

export default styles;
