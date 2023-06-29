import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestCreateRealEstates,
  requestGetAllInformation,
  requestGetDetailRealEstates,
  requestGetListRank,
  editRealStates,
} from '../api';

export const selectPosts = state => state.post;

export const getAllInformation = createAsyncThunk(
  'getAllInformation',
  async (_, { fulfillWithValue }) => {
    const data = await requestGetAllInformation();
    return fulfillWithValue(data);
  }
);

export const getListRank = createAsyncThunk(
  'getListRank',
  async (_, { fulfillWithValue }) => {
    const data = await requestGetListRank();
    return fulfillWithValue(data);
  }
);

export const createRealEstates = createAsyncThunk(
  'createRealEstates',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestCreateRealEstates(params);
      return fulfillWithValue({ ...data });
    } catch (error) {
      const { data } = error;
      let errorString = 'Hệ thống đang bận. Vui lòng thử lại sau (1)';
      if (data) {
        errorString = ` ${
          Object.keys(data)[Object.keys(data).length - 1]
        }: ${data?.[
          Object.keys(data)[Object.keys(data).length - 1]
        ].toString()}`;
      }
      return rejectWithValue(errorString);
    }
  }
);

export const detailRealEstates = createAsyncThunk(
  'detailPost',
  async (params: any, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await requestGetDetailRealEstates(params);
      return fulfillWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const editRealEstates = createAsyncThunk(
  'editRealEstates',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await editRealStates(params);
      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue('Update thất bại.');
    }
  }
);

export const createBasicInformation = createAsyncThunk(
  'createBasicInformation',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      return fulfillWithValue(params);
    } catch (error) {
      return rejectWithValue('');
    }
  }
);

const initialBasicInformation = {
  demand_id: 0,
  real_estate_type_id: null,
  project_id: null,
  address_detail: '',
  province_id: null,
  district_id: null,
  ward_id: null,
  street_id: null,
  lat_long: 0,
};

const slice = createSlice({
  name: 'post',
  initialState: {
    loading: false,
    error: '',
    realEstateType: [],
    information: [],
    basicInformation: initialBasicInformation,
    projects: [],
    demands: [],
    unitPrices: [],
    rank: [],
    utilities: {},
    createRealEstate: {
      loading: false,
      data: {},
      error: '',
    },
  },
  reducers: {},
  extraReducers: builder => {
    // create form basic info
    builder.addCase(createBasicInformation.fulfilled, (state, action) => {
      state.basicInformation = action.payload;
    });
    // create post
    builder.addCase(createRealEstates.pending, state => {
      state.createRealEstate.loading = true;
    });
    builder.addCase(createRealEstates.fulfilled, (state, action) => {
      state.createRealEstate.loading = false;
      state.createRealEstate.data = action.payload;
      state.createRealEstate.error = '';
    });
    builder.addCase(createRealEstates.rejected, (state, action: any) => {
      state.createRealEstate.loading = false;
      state.createRealEstate.error = action.payload;
    });
    // update post
    builder.addCase(editRealEstates.pending, state => {
      state.createRealEstate.loading = true;
    });
    builder.addCase(editRealEstates.fulfilled, (state, action) => {
      state.createRealEstate.loading = false;
      state.createRealEstate.data = action.payload;
      state.createRealEstate.error = '';
    });
    builder.addCase(editRealEstates.rejected, (state, action: any) => {
      state.createRealEstate.loading = false;
      state.createRealEstate.error = action.payload;
    });
    // get all info
    builder.addCase(getAllInformation.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllInformation.fulfilled, (state, action: any) => {
      state.loading = false;
      state.realEstateType = action.payload[0].real_estate_type;
      state.projects = action.payload[0].projects;
      state.demands = action.payload[0].demands;
      state.information = action.payload[0].information;
      state.unitPrices = action.payload[0].unitPrices;
      state.utilities = action.payload[0].utilities;
    });
    // get list rank
    builder.addCase(getListRank.pending, state => {
      state.loading = true;
    });
    builder.addCase(getListRank.fulfilled, (state, action: any) => {
      state.loading = false;
      state.rank = action.payload;
    });
  },
});

export const postReducer = slice.reducer;
