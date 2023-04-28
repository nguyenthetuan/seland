import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGetProfile } from '../api/user';

export const selectUser = state => state.user;

export const getProfile = createAsyncThunk(
  'getProfile',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetProfile('');
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data?.data?.phone_number?.[0]);
    }
  }
);

const slice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: {},
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(getProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export const userReducer = slice.reducer;
