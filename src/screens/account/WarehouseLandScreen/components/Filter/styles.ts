import { StyleSheet } from 'react-native';
import { COLOR_GRAY_2 } from '../../../../../constants';

const styles = StyleSheet.create({
  areaRange: {
    width: '42%',
  },
  boxRealEstate: {
    width: '42%',
    marginRight: 5,
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

  filter: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
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
});

export default styles;
