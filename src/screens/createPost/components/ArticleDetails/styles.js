import { StyleSheet } from 'react-native';

import {
  COLOR_BLUE_1,
  COLOR_GRAY_1,
  COLOR_GRAY_2,
  COLOR_GRAY_5,
  COLOR_GRAY_7,
  COLOR_GRAY_10,
} from '../../../../constants';

const styles = StyleSheet.create({
  boxCheck: {
    flexDirection: 'row',
  },
  boxDate: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  boxSelectTypeUpload: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 24,
    marginTop: 50,
  },
  boxUpload: {
    alignItems: 'center',
    backgroundColor: COLOR_GRAY_10,
    borderColor: COLOR_GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 24,
    marginHorizontal: 10,
    padding: 16,
  },
  btnSelectTypeUpload: value => ({
    borderWidth: 0,
    borderBottomWidth: value,
  }),
  content: {
    color: COLOR_GRAY_1,
    fontSize: 12,
    marginLeft: 10,
  },
  iam: {
    marginLeft: 10,
  },
  inputContainer: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 2,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputLabel: {
    color: COLOR_GRAY_7,
  },
  itemDate: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  label: {
    color: COLOR_BLUE_1,
    marginBottom: 10,
    marginLeft: 10,
  },
  line: {
    alignSelf: 'center',
    backgroundColor: COLOR_GRAY_5,
    height: 1,
    marginBottom: 16,
    width: '90%',
  },
  nameAndPhone: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },
  txtImageContract: {
    marginBottom: 8,
    marginLeft: 10,
  },
  txtInformationContact: {
    marginLeft: 10,
    marginTop: 10,
  },
  txtInput: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default styles;
