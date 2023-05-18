import { StyleSheet } from 'react-native';

import { COLOR_BLUE_1, COLOR_GRAY_2, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
  },
  filterButton: {
    marginLeft: 8,
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
    marginLeft: 8,
    width: '50%',
  },
});

export default styles;
