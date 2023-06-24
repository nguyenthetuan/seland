import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

const styles = StyleSheet.create({
  btnMenu: {
    alignItems: 'center',
    backgroundColor: COLORS.GRAY_6,
    borderColor: COLORS.GRAY_4,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 38,
    justifyContent: 'space-between',
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 20,
  },
  name: {
    color: COLORS.GRAY_1,
  },
});

export default styles;
