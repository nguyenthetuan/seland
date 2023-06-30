import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'rgba(0,0,0,0.06)',
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
  },
  buttonFooter: {
    marginLeft: 20,
  },
  inputSearch: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  avatar: {
    backgroundColor: COLORS.ORANGE_4,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Infor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: COLORS.BLACK_1,
    fontWeight: '700',
    fontSize: 16,
    width: '75%',
  },
  phone: {
    color: COLORS.GRAY_7,
    fontSize: 16,
    marginTop: 10,
  },
  time: {
    color: COLORS.GRAY_7,
    fontSize: 16,
  },
  contact: {
    marginLeft: 10,
  },
  bacicInfor: {
    marginTop: 10,
  },
  leftInfor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    color: COLORS.ORANGE_6,
    fontWeight: '700',
    marginTop: 10,
  },
  txtLocation: {
    color: COLORS.BLUE_2,
    textDecorationLine: 'underline',
  },
  note: {
    color: COLORS.GRAY_7,
    fontSize: 16,
    marginTop: 10,
  },
  mainName: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default styles;
