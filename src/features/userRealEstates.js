import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestDeleteRealEstates,
  requestGetListRealEstatesUser,
} from '../api';

export const selectUserRealEstates = state => state.userRealEstates;

export const getListRealEstatesUser = createAsyncThunk(
  'getListRealEstatesUser',
  async (params, { fulfillWithValue, rejectWithValue }, callback) => {
    try {
      const setTotal = params?.setTotal;
      delete params?.setTotal;
      const { data, total } = await requestGetListRealEstatesUser(params);
      setTotal(total);
      callback && callback(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
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
