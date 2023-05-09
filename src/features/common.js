import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestGetDistricts,
  requestGetProvinces,
  requestGetWards,
} from '../api';

export const selectCommon = state => state.common;

const formatLocations = data =>
  data?.[0]?.map(item => ({
    label: item.name,
    value: item.code,
  }));

export const getProvinces = createAsyncThunk(
  'getProvinces',
  async (_, { fulfillWithValue }) => {
    const data = await requestGetProvinces();
    return fulfillWithValue(formatLocations(data));
  }
);

export const getDistricts = createAsyncThunk(
  'getDistricts',
  async (params, { fulfillWithValue }) => {
    const data = await requestGetDistricts(params);
    return fulfillWithValue(formatLocations(data));
  }
);

export const getWards = createAsyncThunk(
  'getWards',
  async (params, { fulfillWithValue }) => {
    const data = await requestGetWards(params);
    return fulfillWithValue(formatLocations(data));
  }
);

const slice = createSlice({
  name: 'common',
  initialState: {
    loading: false,
    provinces: [],
    districts: [],
    wards: [],
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(getProvinces.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProvinces.fulfilled, (state, action) => {
      state.loading = false;
      state.provinces = action.payload;
      state.error = '';
    });
  },
});

export const commonReducer = slice.reducer;
