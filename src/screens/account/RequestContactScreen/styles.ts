import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    // paddingTop: 40,
    // paddingBottom: 100,
    backgroundColor: COLORS.WHITE
  },
  inputContainer: {
    height: 40,
    flex: 1,
    paddingHorizontal: 0,
  },
  inputSearch: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    // paddingHorizontal: 12,
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
  },
  wrapTextSearch: {
    flex: 1,
  },
  countRequestContact: {
    fontSize: 16,
    marginTop: 10,
  },
  countRequestContactBold: {
    fontWeight: "600",
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    marginLeft: 10,
    width: 100,
    height: 40
  },
  wrapList: {
    marginTop: 8
  },
  wrapperItemContact: {
    padding: 16,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK_1,
    borderRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderBottomColor: COLORS.BLACK_1,
    marginBottom: 16,
  },
  titleItemContact: {
    color: COLORS.BLUE_2,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  wrapContentItemContact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  leftContentItemContact: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: COLORS.ORANGE_4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarName: {
    color: COLORS.ORANGE_1,
    fontWeight: '500',
    fontSize: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  phone: {

  },
  rightContentItemContact: {
    justifyContent: 'flex-end'
  },
  wrapRole: {
    minWidth: 86,
    backgroundColor: "#ADC6FF",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 24,
    marginBottom: 2,
  },
  role: {
    fontSize: 16,
    color: COLORS.BLACK_1,
    fontWeight: '500',
  },
  date: {
    color: COLORS.ORANGE_6,
    fontSize: 16,
    fontWeight: '700',
  },
  message: {
    fontStyle: 'italic',
    color: COLORS.GRAY_7,
    fontWeight: '300',
    marginTop: 10,
  }
});

export default styles;
