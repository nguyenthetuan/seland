import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  address: {
    width: '33%',
    marginRight: 4,
  },
  areaRange: {
    marginHorizontal: 5,
    width: '26%',
  },
  boxRealEstate: {
    width: '46%',
  },
  boxStatus: {
    width: '30%',
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
    width: '50%',
  },

  buttonAddress: {
    // width: '80%',
    justifyContent: 'center',
    height: 36,
  },

  filter: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  rowTextStyle: {
    fontSize: 12,
    lineHeight: 15,
  },
  textButtonSelect: {
    fontSize: 12,
    lineHeight: 15,
    marginHorizontal: 2,
  },
  row: {
    flexDirection: 'row',
  },
  wrapTypeHousing: {
    marginBottom: 12,
    // width: '50%',
    marginLeft: 6,
    flex: 1,
  },
  textTypeHousing: {
    fontSize: 12,
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default styles;
