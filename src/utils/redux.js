import { Alert } from 'react-native';

export const dispatchThunk = async (dispatch, thunk, callback) => {
  try {
    const response = await dispatch(thunk).unwrap();
    if (callback) callback(response);
  } catch (error) {
    Alert.alert(error);
  }
};

export const handleThunkError = (rejectWithValue, error) =>
  rejectWithValue(error.response.data?.data?.error);
