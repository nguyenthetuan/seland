import { StyleSheet } from 'react-native';

import { COLOR_BLUE_2 } from '../../../../constants';

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
