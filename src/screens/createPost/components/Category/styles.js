import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  boxLabelCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  container: {
    borderColor: COLORS.BLUE_1,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 17,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  label: {
    color: COLORS.BLUE_1,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  line: {
    alignSelf: 'center',
    backgroundColor: COLORS.GRAY_5,
    height: 1,
    marginBottom: 16,
    width: '95%',
  },
  row: {
    flexDirection: 'row',
  },
  seeAll: {
    color: COLORS.BLUE_2,
  },
});

export default styles;
