import { StyleSheet } from 'react-native';

import { COLOR_BLUE_1, COLOR_ORANGE_6, COLOR_WHITE } from '../../../constants';

const styles = StyleSheet.create({
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
  },
  btnContinue: {
    backgroundColor: COLOR_BLUE_1,
    marginHorizontal: 10,
    marginVertical: 24,
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

  labelStyle: {
    marginVertical: 0,
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
  selectTimePost: {
    color: COLOR_BLUE_1,
    fontWeight: 500,
    marginLeft: 10,
    marginVertical: 16,
  },
});

export default styles;
