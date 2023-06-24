import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  children: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  container: {
    margin: 10,
  },
  handle: {
    backgroundColor: COLORS.WHITE,
    height: 5,
    width: 60,
  },
  itemRealEstate: {
    borderWidth: 0,
  },
  modalContainer: {
    backgroundColor: COLORS.BLACK_3,
  },
  seeAll: {
    color: COLORS.BLUE_2,
    fontSize: 14,
    lineHeight: 18,
  },
});

export default styles;
