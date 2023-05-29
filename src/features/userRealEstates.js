import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGetListRealEstatesUser } from '../api';

export const selectUserRealEstates = state => state.userRealEstates;

export const getListRealEstatesUser = createAsyncThunk(
  'getListRealEstatesUser',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetListRealEstatesUser(params);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

const slice = createSlice({
  name: 'userRealEstates',
  initialState: {
    loading: false,
    data: [],
    page: 1,
    limit: 10,
    page_size: 10,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(getListRealEstatesUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(getListRealEstatesUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(getListRealEstatesUser.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export const userRealEstatesReducer = slice.reducer;
