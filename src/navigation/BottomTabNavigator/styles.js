import { StyleSheet } from 'react-native';

import { COLOR_BLUE_1, COLOR_GRAY_1, COLOR_ORANGE_2 } from '../../constants';

const styles = StyleSheet.create({
  createPost: {
    alignItems: 'center',
    backgroundColor: COLOR_ORANGE_2,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    marginBottom: 24,
    width: 48,
  },
  label: focused => ({
    color: focused ? COLOR_BLUE_1 : COLOR_GRAY_1,
    fontSize: 12,
    lineHeight: 20,
  }),
});

export default styles;
