import { StyleSheet } from 'react-native';

import { COLOR_BLACK_3, COLOR_GRAY_2, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
  boxItem: {
    alignItems: 'center',
    borderColor: COLOR_BLACK_3,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 5,
    width: 150,
  },
  boxLocation: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_2,
    borderRadius: 5,
    borderWidth: 1,
    padding: 6,
  },
  businessLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    marginBottom: 10,
    marginLeft: 10,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  dot: {
    borderRadius: 7,
    height: 10,
    marginHorizontal: -15,
    margin: 0,
    padding: 0,
    width: 10,
  },
  igBusiness: {
    height: 60,
    width: 90,
  },
  inputContainer: {
    height: 40,
    width: '87%',
  },
  inputSearch: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  viewSearch: {
    alignItems: 'center',
    backgroundColor: '#EDA749',
    flexDirection: 'row',
    padding: 8,
  },
});

export default styles;
