import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants';

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
    justifyContent: 'space-between',
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
  listButton: {
    height: 50,
    marginTop: 5,
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
});

export default styles;
