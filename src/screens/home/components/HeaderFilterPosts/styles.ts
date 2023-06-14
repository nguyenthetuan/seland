import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
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
});

export default styles;
