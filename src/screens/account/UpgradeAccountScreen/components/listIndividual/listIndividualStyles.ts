import { StyleSheet } from 'react-native';
import {
  COLOR_BLACK_1,
  COLOR_ORANGE_6,
  COLOR_GRAY_7,
  COLOR_WHITE,
} from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    borderColor: COLOR_ORANGE_6,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  wrapImageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    color: COLOR_BLACK_1,
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontWeight: '400',
    fontSize: 12,
    color: COLOR_GRAY_7,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
    height: 40,
    backgroundColor: COLOR_ORANGE_6,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR_WHITE,
    fontWeight: '400',
    fontSize: 16,
  },
});

export default styles;
