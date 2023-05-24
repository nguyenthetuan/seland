import { Alert } from 'react-native';

export const dispatchThunk = async (
  dispatch,
  thunk,
  successCallback,
  errorCallback
) => {
  try {
    const response = await dispatch(thunk).unwrap();
    if (response && successCallback) successCallback(response);
  } catch (error) {
    if (errorCallback) errorCallback(error);
    else Alert.alert(error);
  }
};
