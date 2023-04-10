import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestLogin } from '../api';

export const signup = createAsyncThunk(
  'signup',
  async (input, { fulfillWithValue, rejectWithValue }) =>
    'qwertyuiopasdfghjklzxcvbnm'
);

export const login = createAsyncThunk(
  'login',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestLogin(input);
      return fulfillWithValue(data?.user?.auth_token);
    } catch (error) {
      return rejectWithValue(error.response.data?.data?.error);
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
  reducers: {
    logout: state => {
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(signup.pending, state => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = '';
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.token = '';
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
  },
});

export const { logout } = slice.actions;

export const authReducer = slice.reducer;

export const selectAuth = state => state.auth;
