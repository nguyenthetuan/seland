import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGetListRealEstates } from '../api';

export const selectRealEstates = state => state.realEstates;

export const getListRealEstates = createAsyncThunk(
  'getListRealEstates',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetListRealEstates(params);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

const slice = createSlice({
  name: 'realEstates',
  initialState: {
    loading: false,
    data: [],
    page: 1,
    limit: 10,
    page_size: 10,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(getListRealEstates.pending, state => {
      state.loading = true;
    });
    builder.addCase(getListRealEstates.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(getListRealEstates.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export const realEstatesReducer = slice.reducer;
