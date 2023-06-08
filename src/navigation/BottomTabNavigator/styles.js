import { StyleSheet } from 'react-native';

import {
  COLOR_BLUE_1,
  COLOR_GRAY_2,
  COLOR_ORANGE_3,
  COLOR_WHITE,
} from '../../constants';

const styles = StyleSheet.create({
  boxButton: {
    backgroundColor: COLOR_WHITE,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  createPost: {
    alignItems: 'center',
    backgroundColor: COLOR_ORANGE_3,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    marginBottom: -23,
    top: -25,
    width: 48,
  },
  label: focused => ({
    color: focused ? COLOR_BLUE_1 : COLOR_GRAY_2,
    fontSize: 12,
    lineHeight: 20,
  }),
});

export default styles;
