import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGetAllFilter, requestGetListRealEstates } from '../api';

export const selectRealEstates = state => state.realEstates;

export const getListRealEstates = createAsyncThunk(
  'getListRealEstates',
  async (params, { fulfillWithValue, rejectWithValue }, callback) => {
    try {
      const setTotal = params?.setTotal;
      const setTotalPage = params?.setTotalPage;
      delete params?.setTotal;
      delete params?.setTotalPage;

      const { data, total } = await requestGetListRealEstates(params);

      callback && callback(data);
      setTotal && setTotal(total);
      setTotalPage && setTotalPage(Math.ceil(total / 20));
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

export const getAllFilter = createAsyncThunk(
  'getAllFilter',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await requestGetAllFilter();
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
    area: [],
    bathroom: [],
    bedroom: [],
    floor: [],
    more: [],
    price: [],
    real_estate_type: [],
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
    builder.addCase(getAllFilter.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllFilter.fulfilled, (state, action) => {
      state.loading = false;
      // eslint-disable-next-line prefer-destructuring
      state.area = action.payload[0]?.area;
      state.bathroom = action.payload[0]?.bathroom;
      state.bedroom = action.payload[0]?.bedroom;
      state.floor = action.payload[0]?.floor;
      state.more = action.payload[0]?.more;
      state.price = action.payload[0]?.price;
      state.real_estate_type = action.payload[0]?.real_estate_type;
      state.error = '';
    });
    builder.addCase(getAllFilter.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export const realEstatesReducer = slice.reducer;
