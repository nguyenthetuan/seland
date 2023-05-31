import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLUE_1,
  COLOR_GRAY_5,
  COLOR_ORANGE_6,
  COLOR_WHITE,
} from '../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxCode: {
    borderColor: COLOR_ORANGE_6,
    borderRadius: 4,
    borderStyle: 'dotted',
    borderWidth: 1,
    marginLeft: 30,
    padding: 5,
    paddingHorizontal: 16,
  },
  boxCodePost: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 26,
    marginTop: 20,
  },
  boxInformation: {
    borderColor: COLOR_ORANGE_6,
    borderRadius: 5,
    borderStyle: 'dotted',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  boxNumberPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  boxPopup: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    padding: 20,
    width: width * 0.96,
  },
  boxRank: {
    borderColor: COLOR_BLUE_1,
    borderRadius: 5,
    borderWidth: 2,
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    width: width * 0.91,
  },
  boxShowDown: {
    alignItems: 'flex-end',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  boxTitleRank: {
    borderColor: COLOR_GRAY_5,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: 8,
  },
  btnContinue: {
    backgroundColor: COLOR_BLUE_1,
    marginHorizontal: 10,
    marginVertical: 24,
  },
  code: {
    color: COLOR_ORANGE_6,
  },
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
  },
  createPostNews: {
    fontWeight: 500,
    marginLeft: 10,
  },
  dot: {
    borderRadius: 7,
    height: 10,
    marginHorizontal: -15,
    margin: 0,
    padding: 0,
    width: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputContainerStyle: {
    width: width * 0.45,
  },
  labelStyle: {
    marginVertical: 0,
  },
  line1: {
    backgroundColor: '#F0F0F0',
    height: 3,
    marginBottom: 8,
    width: '100%',
  },
  line2: {
    backgroundColor: '#F0F0F0',
    height: 3,
    marginBottom: 8,
    width: 40,
  },
  postTheEnd: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 32,
    textAlign: 'center',
  },
  scroll: {
    paddingBottom: 50,
  },
  scrollViewContainerStyle: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectTimePost: {
    color: COLOR_BLUE_1,
    fontWeight: 500,
    marginLeft: 10,
    marginVertical: 16,
  },
  spinnerTextStyle: {
    color: COLOR_BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
  txtTimeLimitPost: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
    marginVertical: 8,
  },
  txtTitle: {
    fontSize: 12,
    lineHeight: 20,
  },
  txtValueRank: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default styles;
