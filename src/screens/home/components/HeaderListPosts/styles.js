import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  boxZoning: {
    alignItems: 'center',
  },
  checkZoning: {
    fontSize: 10,
    lineHeight: 12,
  },
  headerListPosts: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.GRAY_2,
    borderBottomWidth: 1,
    // elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    // shadowColor: COLORS.BLACK_1,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,

    // shadowRadius: 3.84,
  },
  inputContainer: {
    height: 40,
    width: '60%',
  },
  inputSearch: {
    borderColor: COLORS.GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default styles;
