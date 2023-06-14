import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  buttonClose: {
    backgroundColor: COLORS.BLUE_1,
    borderRadius: 5,
    padding: 6,
  },
  buttonSelect: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 2,
    height: 36,
  },
  filterPost: {
    color: COLORS.GRAY_8,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: '7%',
  },
  header: {
    alignItems: 'center',
    borderBottomColor: COLORS.GRAY_2,
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
