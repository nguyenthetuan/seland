import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  accountRank: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  addressItem: {
    width: '49%',
  },
  addressMiddle: {
    marginHorizontal: 8,
    width: '32%',
  },
  boxAvatar: {
    alignSelf: 'center',
    backgroundColor: COLORS.ORANGE_4,
  },
  button: {
    marginBottom: 48,
    marginHorizontal: 8,
    marginTop: 24,
  },
  checked: {
    position: 'absolute',
    right: 4,
    top: 4,
  },
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  form: {
    marginHorizontal: 8,
  },
  iamButton: selected => ({
    borderColor: selected ? COLORS.BLUE_2 : COLORS.GRAY_5,
    borderWidth: 2,
  }),
  iamButtonContainer: {
    flex: 0.5,
    marginBottom: 6,
    marginHorizontal: 4,
  },
  iamButtonTitle: {
    color: COLORS.BLUE_1,
  },
  inputLabel: {
    color: COLORS.GRAY_7,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginVertical: 16,
  },
  labelStyleDate: {
    color: COLORS.GRAY_7,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  mainLabel: {
    fontWeight: 'bold',
    marginVertical: 16,
  },
  select: {
    height: 40,
  },
  taxCode: {
    marginTop: 16,
  },
  text: {
    color: COLORS.ORANGE_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  viewMoreAccountPackages: {
    color: COLORS.BLUE_2,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
});

export default styles;
