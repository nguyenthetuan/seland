import { StyleSheet } from 'react-native';

import {
  COLOR_GRAY_7,
  COLOR_GRAY_8,
  COLOR_ORANGE_1,
  COLOR_ORANGE_4,
} from '../../../constants';

const styles = StyleSheet.create({
  boxAvatar: {
    alignSelf: 'center',
    backgroundColor: COLOR_ORANGE_4,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  inputLabel: {
    color: COLOR_GRAY_7,
    fontWeight: 'bold',
  },
  label: {
    color: COLOR_GRAY_8,
    fontWeight: 500,
    marginLeft: 8,
    marginVertical: 16,
  },
  text: {
    color: COLOR_ORANGE_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
  },
});

export default styles;
