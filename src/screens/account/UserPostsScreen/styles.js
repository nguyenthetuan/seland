import { StyleSheet } from 'react-native';

import { COLOR_BLUE_1, COLOR_GRAY_2, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  dateRangePicker: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    padding: 16,
  },
  filterButton: {
    marginLeft: 8,
  },
  flex: {
    flex: 1,
  },
  list: {
    marginVertical: 16,
  },
  loadingText: {
    color: COLOR_BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
  marginHorizontal: {
    marginHorizontal: 8,
  },
  postButton: {
    width: 150,
  },
  postButtons: {
    flexGrow: 0,
    marginBottom: 16,
  },
  search: {
    flex: 2,
  },
  searchFilter: {
    flexDirection: 'row',
    marginRight: 8,
  },
  searchInput: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectButton: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 4,
    height: 40,
  },
  sort: {
    marginBottom: -16,
    marginLeft: 8,
    marginTop: -8,
    width: '50%',
  },
  whiteBackground: {
    backgroundColor: COLOR_WHITE,
  },
});

export default styles;
