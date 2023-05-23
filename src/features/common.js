import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestGetAllInformation,
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

export const getCompanyProvinces = createAsyncThunk(
  'getCompanyProvinces',
  async (_, { fulfillWithValue }) => {
    const data = await requestGetProvinces();
    return fulfillWithValue(formatLocations(data));
  }
);

export const getCompanyDistricts = createAsyncThunk(
  'getCompanyDistricts',
  async (params, { fulfillWithValue }) => {
    const data = await requestGetDistricts(params);
    return fulfillWithValue(formatLocations(data));
  }
);

export const getCompanyWards = createAsyncThunk(
  'getCompanyWards',
  async (params, { fulfillWithValue }) => {
    const data = await requestGetWards(params);
    return fulfillWithValue(formatLocations(data));
  }
);
export const getAllInformation = createAsyncThunk(
  'getAllInformation',
  async (_, { fulfillWithValue }) => {
    const data = await requestGetAllInformation();
    return fulfillWithValue(data);
  }
);

const slice = createSlice({
  name: 'common',
  initialState: {
    loading: false,
    provinces: [],
    districts: [],
    wards: [],
    street: [],
    companyProvinces: [],
    companyDistricts: [],
    companyWards: [],
    realEstateType: [],
    information: [],
    projects: [],
    demands: [],
    error: '',
  },
  reducers: {
    clearDistricts: state => {
      state.districts = [];
    },
    clearWards: state => {
      state.wards = [];
    },
    clearCompanyDistricts: state => {
      state.companyDistricts = [];
    },
    clearCompanyWards: state => {
      state.companyWards = [];
    },
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
    builder.addCase(getDistricts.pending, state => {
      state.loading = true;
    });
    builder.addCase(getDistricts.fulfilled, (state, action) => {
      state.loading = false;
      state.districts = action.payload;
      state.error = '';
    });
    builder.addCase(getWards.pending, state => {
      state.loading = true;
    });
    builder.addCase(getWards.fulfilled, (state, action) => {
      state.loading = false;
      state.wards = action.payload;
      state.error = '';
    });
    builder.addCase(getCompanyProvinces.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCompanyProvinces.fulfilled, (state, action) => {
      state.loading = false;
      state.companyProvinces = action.payload;
      state.error = '';
    });
    builder.addCase(getCompanyDistricts.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCompanyDistricts.fulfilled, (state, action) => {
      state.loading = false;
      state.companyDistricts = action.payload;
      state.error = '';
    });
    builder.addCase(getCompanyWards.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCompanyWards.fulfilled, (state, action) => {
      state.loading = false;
      state.companyWards = action.payload;
      state.error = '';
    });
    builder.addCase(getAllInformation.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllInformation.fulfilled, (state, action) => {
      state.loading = false;
      state.realEstateType = action.payload[0].real_estate_type;
      state.projects = action.payload[0].projects;
      state.demands = action.payload[0].demands;
      state.error = '';
    });
  },
});

export const {
  clearDistricts,
  clearWards,
  clearCompanyDistricts,
  clearCompanyWards,
} = slice.actions;

export const commonReducer = slice.reducer;
