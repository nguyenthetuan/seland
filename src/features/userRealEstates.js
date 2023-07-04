import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestDeleteRealEstates,
  requestGetListRealEstatesUser,
} from '../api';

export const selectUserRealEstates = state => state.userRealEstates;

export const getListRealEstatesUser = createAsyncThunk(
  'getListRealEstatesUser',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      delete params?.setTotal;
      const response = await requestGetListRealEstatesUser(params);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue('Hệ thống đang bận. Vui lòng thử lại sau (4)');
    }
  }
);

export const deleteRealEstatesUser = createAsyncThunk(
  'deleteRealEstatesUser',
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await requestDeleteRealEstates(id);
      return fulfillWithValue(response);
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error?.errors);
    }
  }
);

const slice = createSlice({
  name: 'userRealEstates',
  initialState: {
    loading: false,
    loadingDelete: false,
    data: [],
    total: 0,
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
      console.log(
        '🚀 ~ file: userRealEstates.js:55 ~ builder.addCase ~ action.payload:',
        action.payload
      );
      state.data = action.payload.data;
      state.total = action.payload.total;
      state.page = action.payload.page;
      state.page_size = action.payload.page_size;
      state.error = '';
    });
    builder.addCase(getListRealEstatesUser.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
    builder.addCase(deleteRealEstatesUser.pending, state => {
      state.loadingDelete = true;
    });
    builder.addCase(deleteRealEstatesUser.fulfilled, state => {
      state.loadingDelete = false;
      state.error = '';
    });
    builder.addCase(deleteRealEstatesUser.rejected, (state, action) => {
      state.loadingDelete = false;
      state.error = action.payload;
    });
  },
});

export const userRealEstatesReducer = slice.reducer;
