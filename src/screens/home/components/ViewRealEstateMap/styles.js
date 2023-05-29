import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_3,
  COLOR_BLUE_2,
  COLOR_WHITE,
} from '../../../../constants';

const styles = StyleSheet.create({
  children: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  container: {
    margin: 10,
  },
  handle: {
    backgroundColor: COLOR_WHITE,
    height: 5,
    width: 60,
  },
  itemRealEstate: {
    borderWidth: 0,
  },
  modalContainer: {
    backgroundColor: COLOR_BLACK_3,
  },
  seeAll: {
    color: COLOR_BLUE_2,
    fontSize: 14,
    lineHeight: 18,
  },
});

export default styles;
