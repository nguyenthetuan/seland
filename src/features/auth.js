import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

import {
  requestChangePassword,
  requestForgotPassword,
  requestGenerateOtp,
  requestLogin,
  requestLogout,
  requestSignup,
  requestVerifyOtp,
} from '../api';

export const selectAuth = state => state.auth;

export const setDeviceId = createAction('setDeviceId');

export const signup = createAsyncThunk(
  'signup',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestSignup(input);
      return fulfillWithValue(data?.user?.phone_number);
    } catch (error) {
      return rejectWithValue(error.data?.phone_number?.[0]);
    }
  }
);

export const login = createAsyncThunk(
  'login',
  async (input, { dispatch, fulfillWithValue, getState, rejectWithValue }) => {
    try {
      const { deviceId } = selectAuth(getState());

      let deviceUuid = '';
      if (!deviceId) {
        deviceUuid = uuid.v4();
        dispatch(setDeviceId(deviceUuid));
      }

      const params = {
        ...input,
        device_id: deviceId || deviceUuid,
      };
      const data = await requestLogin(params);
      return fulfillWithValue(data?.user?.auth_token);
    } catch (error) {
      return rejectWithValue(error?.data?.error);
    }
  }
);

export const logout = createAsyncThunk(
  'logout',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await requestLogout();
      return fulfillWithValue(data?.message);
    } catch (error) {
      return rejectWithValue(error?.data?.error);
    }
  }
);

export const generateOtp = createAsyncThunk(
  'generateOtp',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGenerateOtp(input);
      return fulfillWithValue(data?.message);
    } catch (error) {
      return rejectWithValue(error?.data?.error);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'verifyOtp',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestVerifyOtp(input);
      return fulfillWithValue(data?.data?.is_phone_verified);
    } catch (error) {
      return rejectWithValue(error?.data?.otp?.[0] || error?.data?.error);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'forgotPassword',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestForgotPassword(input);
      return fulfillWithValue(data?.message);
    } catch (error) {
      return rejectWithValue(error?.data?.error);
    }
  }
);

export const changePassword = createAsyncThunk(
  'changePassword',
  async (input, { fulfillWithValue, getState, rejectWithValue }) => {
    try {
      const { token } = selectAuth(getState());
      const { data } = await requestChangePassword(input, token);
      return fulfillWithValue(data?.message);
    } catch (error) {
      return rejectWithValue(error?.data?.error);
    }
  }
);

const slice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    token: '',
    error: '',
    deviceId: '',
  },
  extraReducers: builder => {
    builder.addCase(setDeviceId, (state, action) => {
      state.deviceId = action.payload;
    });
    builder.addCase(signup.pending, state => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, state => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = '';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.token = '';
      state.error = action.payload;
    });
    builder.addCase(logout.pending, state => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, state => {
      state.loading = false;
      state.token = '';
    });
    builder.addCase(logout.rejected, state => {
      state.loading = false;
      state.token = '';
    });
    builder.addCase(generateOtp.pending, state => {
      state.loading = true;
    });
    builder.addCase(generateOtp.fulfilled, state => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(generateOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(verifyOtp.pending, state => {
      state.loading = true;
    });
    builder.addCase(verifyOtp.fulfilled, state => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(forgotPassword.pending, state => {
      state.loading = true;
    });
    builder.addCase(forgotPassword.fulfilled, state => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(changePassword.pending, state => {
      state.loading = true;
    });
    builder.addCase(changePassword.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(changePassword.rejected, state => {
      state.loading = false;
    });
  },
});

export const authReducer = slice.reducer;
