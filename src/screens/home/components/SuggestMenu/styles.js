import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_2,
  COLOR_BLUE_1,
  COLOR_BLUE_2,
  COLOR_GRAY_5,
  COLOR_GRAY_6,
} from '../../../../constants';

const styles = StyleSheet.create({
  boxItemSuggest: {
    alignItems: 'center',
    borderColor: COLOR_BLUE_2,
    borderRadius: 5,
    borderWidth: 1,
    height: 90,
    justifyContent: 'center',
    margin: 5,
    width: '22%',
  },
  content: {
    color: COLOR_BLUE_1,
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
  },
  expand: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  line: {
    backgroundColor: COLOR_GRAY_6,
    height: 1.5,
    marginVertical: 5,
    width: '100%',
  },
  listSuggest: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5,
  },
  txtExpand: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 5,
    top: -2,
  },
});

export default styles;
