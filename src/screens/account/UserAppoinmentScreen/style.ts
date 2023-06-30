import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonFooter: {
    marginLeft: 20,
  },
  inputSearch: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

export default styles;
