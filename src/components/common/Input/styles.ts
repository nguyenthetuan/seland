import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  boxLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  containerInput: {
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  error: {
    color: COLORS.RED_1,
    fontSize: 12,
    lineHeight: 19,
    marginHorizontal: 0,
    marginVertical: 8,
  },
  input: (isFocused: boolean) => ({
    borderColor: isFocused ? COLORS.BLUE_4 : COLORS.GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    height: 40,
  }),
  label: {
    color: COLORS.BLACK_1,
    fontSize: 16,
    lineHeight: 24,
  },
  passwordPolicy: {
    color: COLORS.BLACK_2,
    marginBottom: 8,
    marginLeft: 8,
  },
  text: {
    fontSize: 16,
    // lineHeight: 24,
  },
  wrapRightAfterLabel: {
    paddingLeft: 8,
  }
});

export default styles;
