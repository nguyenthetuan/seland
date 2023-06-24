import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  areaRange: {
    marginHorizontal: 5,
    width: '26%',
  },
  boxListPost: {
    flex: 1,
  },
  boxRealEstate: {
    width: '33%',
  },
  boxStatus: {
    width: '27%',
  },
  boxZoning: {
    alignItems: 'center',
  },
  btnFilter: {
    alignItems: 'center',
    borderColor: COLORS.GRAY_2,
    borderRadius: 2,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    marginRight: 5,
    width: 36,
  },
  buttonSelect: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 2,
    height: 36,
  },
  buttonSort: {
    marginTop: 10,
    width: '50%',
  },
  checkZoning: {
    fontSize: 10,
    lineHeight: 12,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  filter: {
    flexDirection: 'row',
    marginTop: 10,
  },
  headerListPosts: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.GRAY_2,
    borderBottomWidth: 1,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
  },
  inputContainer: {
    height: 40,
    width: '60%',
  },
  inputSearch: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  list: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
  },
  rowTextStyle: {
    fontSize: 12,
    lineHeight: 15,
  },
  spinnerTextStyle: {
    color: COLORS.BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
  textButtonSelect: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 2,
  },
});

export default styles;
