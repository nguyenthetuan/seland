import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  boxItemSuggest: {
    alignItems: 'center',
    borderColor: COLORS.BLUE_2,
    borderRadius: 5,
    borderWidth: 1,
    height: 90,
    justifyContent: 'center',
    margin: 5,
    width: '22%',
  },
  content: {
    color: COLORS.BLUE_1,
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
    backgroundColor: COLORS.GRAY_6,
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
