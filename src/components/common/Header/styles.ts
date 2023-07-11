import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 4,
  },
  right: {
    marginRight: 10,
  },
});

export default styles;
