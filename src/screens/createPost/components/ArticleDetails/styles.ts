import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxCheck: {
    flexDirection: 'row',
  },
  input: {
    paddingTop: 7,
    alignSelf: 'flex-start',
  },
  boxDate: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  boxFile: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5,
  },
  boxImage: {
    borderColor: COLORS.GRAY_5,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },
  fileSize: {
    fontSize: 12,
    left: 10,
    bottom: 0,
    color: COLORS.GRAY_5,
    position: 'absolute',
  },
  boxSelectTypeUpload: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 24,
    marginTop: 50,
  },
  boxUpload: {
    alignItems: 'center',
    backgroundColor: COLORS.GRAY_10,
    borderColor: COLORS.GRAY_5,
    borderRadius: 2,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 16,
  },
  btnAddImage: {
    alignItems: 'center',
    borderColor: COLORS.GRAY_5,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    height: width * 0.2,
    justifyContent: 'center',
    marginHorizontal: 5,
    margin: 5,
    width: width * 0.2,
  },
  btnDeleteImage: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 5,
  },
  btnSelectTypeUpload: value => ({
    borderWidth: 0,
    borderBottomWidth: value,
  }),
  containerPrivate: {
    marginHorizontal: 10,
  },
  content: {
    color: COLORS.GRAY_1,
    fontSize: 12,
  },
  errorPhoto: {
    color: 'red',
    fontSize: 12,
    marginLeft: 16,
  },
  image: {
    borderRadius: 5,
    height: width * 0.2,
    width: width * 0.2,
  },
  inputContainer: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 2,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputContainerContent: {
    height: 160,
  },
  inputContainerStyle: {
    marginHorizontal: 10,
  },
  inputContainerTitle: {},
  inputLabel: {
    color: COLORS.GRAY_7,
  },
  itemDate: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  label: {
    color: COLORS.BLUE_1,
    marginBottom: 10,
    marginLeft: 10,
  },
  line: {
    alignSelf: 'center',
    backgroundColor: COLORS.GRAY_5,
    height: 1,
    marginBottom: 16,
    width: '95%',
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
    marginTop: 10,
  },
  txtInput: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default styles;
