import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGetDetailRealEstates } from '../api';

export const selectDetailRealEstates = state => state.detailRealEstates;

export const getDetailRealEstates = createAsyncThunk(
  'getDetailRealEstates',
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetDetailRealEstates(id);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

const slice = createSlice({
  name: 'detailRealEstates',
  initialState: {
    loading: false,
    data: [],
    page: 1,
    limit: 10,
    page_size: 10,
  },
  extraReducers: builder => {
    builder.addCase(getDetailRealEstates.pending, state => {
      state.loading = true;
    });
    builder.addCase(getDetailRealEstates.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(getDetailRealEstates.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export const detailRealEstatesReducer = slice.reducer;
