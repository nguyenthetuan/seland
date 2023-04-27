import { StyleSheet } from 'react-native';

import {
  COLOR_ORANGE_1,
  COLOR_ORANGE_5,
  COLOR_WHITE,
} from '../../../constants';

const styles = StyleSheet.create({
  avatar: size => ({
    borderRadius: size,
    height: '100%',
    width: '100%',
  }),
  boxAvatar: size => ({
    backgroundColor: COLOR_ORANGE_5,
    borderRadius: size,
    color: COLOR_WHITE,
    height: size,
    width: size,
  }),
  camera: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 40,
    bottom: 0,
    padding: 7,
    position: 'absolute',
    right: 0,
  },
  notAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLOR_ORANGE_1,
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 28,
  },
});

export default styles;
