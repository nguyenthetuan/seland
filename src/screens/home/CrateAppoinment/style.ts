import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  buttonFooter: {
    borderRadius: 10,
    paddingHorizontal: 50,
  },
  buttonBack: {
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  Footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: COLORS.BLUE_1,
    fontWeight: '500',
    alignSelf: 'center',
  },
  inputLabel: {},
  errorStyle: {},
  wrapInput: {
    marginTop: 10,
    flex: 1,
  },
  styleDatePicker: {
    marginTop: 30,
  },
  valueBDS: {
    marginTop: 10,
    color: COLORS.BLUE_2,
  },
  InforRealState: {
    marginTop: 30,
  },
  select: {
    height: 40,
  },
  inputTime: {
    marginTop: 30,
  },
});

export default styles;
