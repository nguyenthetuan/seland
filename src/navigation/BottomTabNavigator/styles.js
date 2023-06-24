import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  boxButton: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  createPost: {
    alignItems: 'center',
    backgroundColor: COLORS.ORANGE_3,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    marginBottom: -23,
    top: -25,
    width: 48,
  },
  label: focused => ({
    color: focused ? COLORS.BLUE_1 : COLORS.GRAY_2,
    fontSize: 12,
    lineHeight: 20,
  }),
});

export default styles;
