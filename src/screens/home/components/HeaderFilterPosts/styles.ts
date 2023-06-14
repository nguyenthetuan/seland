import { StyleSheet } from 'react-native';
import { COLOR_GRAY_2 } from '../../../../constants';

const styles = StyleSheet.create({
  address: {
    width: '33%',
    marginRight: 4
  },
  areaRange: {
    marginHorizontal: 5,
    width: '26%',
  },
  boxRealEstate: {
    width: '33%',
  },
  boxStatus: {
    width: '27%',
  },
  btnFilter: {
    alignItems: 'center',
    borderColor: COLOR_GRAY_2,
    borderRadius: 2,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    marginRight: 5,
    width: 36,
  },
  buttonSelect: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 2,
    height: 36,
  },
  buttonSort: {
    width: '50%',
  },

  buttonAddress: {
    // width: '80%',
    justifyContent: 'center',
    height: 36
  },

  filter: {
    flexDirection: 'row',
    marginTop: 10,
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
    width: '100%'
  },
  textTypeHousing: {
    fontSize: 12
  }
});

export default styles;
