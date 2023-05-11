import { StyleSheet } from 'react-native';

import {
  COLOR_BLUE_1,
  COLOR_BLUE_2,
  COLOR_GRAY_5,
  COLOR_GRAY_7,
  COLOR_ORANGE_1,
  COLOR_ORANGE_4,
  COLOR_WHITE,
} from '../../../constants';

const styles = StyleSheet.create({
  accountRank: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 8,
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
    backgroundColor: COLOR_ORANGE_4,
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
    backgroundColor: COLOR_WHITE,
    flex: 1,
  },
  iamButton: selected => ({
    borderColor: selected ? COLOR_BLUE_2 : COLOR_GRAY_5,
    borderWidth: 2,
  }),
  iamButtonContainer: {
    flex: 0.5,
    marginBottom: 6,
    marginHorizontal: 4,
  },
  iamButtonTitle: {
    color: COLOR_BLUE_1,
  },
  inputLabel: {
    color: COLOR_GRAY_7,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 8,
    marginVertical: 16,
  },
  mainLabel: {
    fontWeight: 'bold',
    marginVertical: 16,
  },
  select: {
    height: 40,
  },
  sex: {
    marginBottom: 8,
    marginHorizontal: 8,
  },
  text: {
    color: COLOR_ORANGE_1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  viewMoreAccountPackages: {
    color: COLOR_BLUE_2,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
});

export default styles;
