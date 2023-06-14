import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  boxImage: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerAction: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },
  iconHeader: {
    width: 31,
    height: 31,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 100,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeaderRight: {
    width: 31,
    height: 31,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 100,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default styles;
