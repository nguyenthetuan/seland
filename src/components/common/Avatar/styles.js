import { StyleSheet } from 'react-native';

import {
  COLOR_ORANGE_1,
  COLOR_ORANGE_4,
  COLOR_WHITE,
} from '../../../constants';

const styles = StyleSheet.create({
  avatar: size => ({
    borderRadius: size,
    height: '100%',
    width: '100%',
  }),
  boxAvatar: size => ({
    backgroundColor: COLOR_ORANGE_4,
    borderRadius: size,
    color: COLOR_WHITE,
    height: size,
    width: size,
  }),
  camera: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 40,
    bottom: 0,
    elevation: 5,
    padding: 7,
    position: 'absolute',

    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
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
