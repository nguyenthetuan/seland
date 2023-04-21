import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestForgotPassword,
  requestGenerateOtp,
  requestLogin,
  requestLogout,
  requestSignup,
  requestVerifyOtp,
} from '../api';
import { handleThunkError } from '../utils';

export const selectAuth = state => state.auth;

export const signup = createAsyncThunk(
  'signup',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestSignup(input);
      return fulfillWithValue(data?.user?.phone_number);
    } catch (error) {
      return rejectWithValue(error.response.data?.data?.phone_number?.[0]);
    }
  }
);

export const login = createAsyncThunk(
  'login',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestLogin(input);
      return fulfillWithValue(data?.user?.auth_token);
    } catch (error) {
      return handleThunkError(rejectWithValue, error);
    }
  }
);

export const logout = createAsyncThunk(
  'logout',
  async (_, { fulfillWithValue, getState, rejectWithValue }) => {
    try {
      const { token } = selectAuth(getState());
      const { data } = await requestLogout(token);
      return fulfillWithValue(data?.message);
    } catch (error) {
      return handleThunkError(rejectWithValue, error);
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
      return handleThunkError(rejectWithValue, error);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'verifyOtp',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestVerifyOtp(input);
      return fulfillWithValue(data?.data?.message);
    } catch (error) {
      return handleThunkError(rejectWithValue, error);
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
      return handleThunkError(rejectWithValue, error);
    }
  }
);

const slice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    token: '',
    error: '',
  },
  extraReducers: builder => {
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
  },
});

export const authReducer = slice.reducer;
