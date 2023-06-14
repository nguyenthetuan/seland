import { StyleSheet } from 'react-native';

const { COLORS } = require('../../../../constants');

const styles = StyleSheet.create({
  boxRealEstate: {
    flexDirection: 'row',
    flex: 1,
  },
  btnSelect: {
    height: 30,
    marginRight: 8,
    maxWidth: 96,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
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
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  district: {
    paddingRight: 4,
    width: '50%',
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
    marginTop: 16,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowTextStyle: {
    fontSize: 12,
    lineHeight: 15,
  },
  scroll: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
  },
  textButtonSelect: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 2,
  },
  txtFilter: {
    marginBottom: 4,
  },
  txtSelect: {
    fontSize: 14,
    lineHeight: 18,
  },
  ward: {
    paddingLeft: 4,
    width: '50%',
  },
  wrapArea: {
    flexDirection: 'row',
  },
  wrapButton: {
    flexDirection: 'row',
    marginVertical: 0,
    paddingVertical: 0,
  },
  wrapFilter: {
    marginTop: 8,
  },
  wrapIcon: {
    marginRight: 12,
  },
  wrapInput: {
    marginVertical: 0,
    paddingVertical: 0,
  },
  wrapTypeHousing: {
    marginBottom: 12,
  },
});

export default styles;
