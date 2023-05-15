import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGetListRealEstateByLocation } from '../api';

export const selectHome = state => state.home;

export const getListRealEstateByLocation = createAsyncThunk(
  'getListRealEstateByLocation',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetListRealEstateByLocation();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

const slice = createSlice({
  name: 'home',
  initialState: {
    listRealEstateByLocation: {
      loading: false,
      data: [],
      page: 1,
      limit: 10,
      page_size: 10,
      error: '',
    },
  },
  extraReducers: builder => {
    builder.addCase(getListRealEstateByLocation.pending, state => {
      state.listRealEstateByLocation.loading = true;
    });
    builder.addCase(getListRealEstateByLocation.fulfilled, (state, action) => {
      console.log(
        '🚀 ~ file: home.js:38 ~ builder.addCase ~ action.payload:',
        action.payload
      );
      state.listRealEstateByLocation.loading = false;
      state.listRealEstateByLocation.data = action.payload;
      state.listRealEstateByLocation.error = '';
    });
    builder.addCase(getListRealEstateByLocation.rejected, (state, action) => {
      state.listRealEstateByLocation.loading = false;
      state.listRealEstateByLocation.data = [];
      state.listRealEstateByLocation.error = action.payload;
    });
  },
});

export const homeReducer = slice.reducer;
