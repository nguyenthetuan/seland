import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../../constants';

const { width } = Dimensions.get('screen');

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
    marginRight: 10,
  },

  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxPopup: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    padding: 20,
    width: width * 0.96,
  },
  btnPopup: {
    width: width * 0.41,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BLACK_2,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    borderColor: COLORS.GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    height: 40,
    marginBottom: 20,
  },
  itemSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
