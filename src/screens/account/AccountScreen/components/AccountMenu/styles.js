import { StyleSheet } from 'react-native';

import {
  COLOR_GRAY_1,
  COLOR_GRAY_4,
  COLOR_ORANGE_4,
} from '../../../../../constants';

const styles = StyleSheet.create({
  btnMenu: {
    alignItems: 'center',
    backgroundColor: COLOR_ORANGE_4,
    borderColor: COLOR_GRAY_4,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 38,
    justifyContent: 'space-between',
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 20,
  },
  name: {
    color: COLOR_GRAY_1,
  },
});

export default styles;
