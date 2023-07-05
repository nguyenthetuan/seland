import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
  },
  dateRangePicker: {
    backgroundColor: COLORS.WHITE,
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
    flex: 1,
    paddingHorizontal: 8,
  },
  listButton: {
    height: 50,
    // marginBottom: 8,
  },
  loadingText: {
    color: COLORS.BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
  marginHorizontal: {
    marginHorizontal: 8,
  },
  postButton: {
    height: 40,
    padding: 0,
    paddingVertical: 0,
    width: 150,
  },
  postButtons: {
    flexGrow: 0,
    marginBottom: 16,
    marginTop: 10,
  },
  search: {
    flex: 2,
    marginHorizontal: 10,
  },
  searchFilter: {
    flexDirection: 'row',
    marginRight: 8,
  },
  searchInput: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectButton: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 4,
    height: 40,
  },
  sort: {
    marginLeft: 8,
    marginTop: -8,
    width: '50%',
  },
  whiteBackground: {
    backgroundColor: COLORS.WHITE,
  },
});

export default styles;
