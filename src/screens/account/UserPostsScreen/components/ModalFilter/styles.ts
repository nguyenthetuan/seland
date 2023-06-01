import { StyleSheet } from 'react-native';

import {
  COLOR_BLUE_1,
  COLOR_GRAY_2,
  COLOR_GRAY_8,
} from '../../../../../constants';

const styles = StyleSheet.create({
  buttonClose: {
    backgroundColor: COLOR_BLUE_1,
    borderRadius: 5,
    padding: 6,
  },
  buttonSelect: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 2,
    height: 36,
  },
  filterPost: {
    color: COLOR_GRAY_8,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  header: {
    alignItems: 'center',
    borderBottomColor: COLOR_GRAY_2,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 10,
  },
  rowTextStyle: {
    fontSize: 12,
    lineHeight: 15,
  },
  scroll: {
    paddingHorizontal: 10,
  },
  tab: {
    margin: 5,
    width: 100,
  },
  tabs: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textButtonSelect: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 2,
  },
});

export default styles;
