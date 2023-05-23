import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestCreateRealEstates } from '../api';

export const selectPosts = state => state.post;

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
export const createRealEstateInformation = createAsyncThunk(
  'createRealEstateInformation',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      return fulfillWithValue(params);
    } catch (error) {
      return rejectWithValue('');
    }
  }
);
export const createArticleDetails = createAsyncThunk(
  'createArticleDetails',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      return fulfillWithValue(params);
    } catch (error) {
      return rejectWithValue('');
    }
  }
);

export const createRealEstates = createAsyncThunk(
  'createRealEstates',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestCreateRealEstates(params);
      console.log('🚀 ~ file: createPosts.js:43 ~ data:', data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log('🚀 ~ file: createPosts.js:45 ~ error:', error);
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

const initialRealEstateInformation = {
  area: '',
  price: '',
  price_unit: 1,
  width: '',
  length: '',
  lane_width: '',
  unit: null,
  bathroom: null,
  bedroom: null,
  main_door_direction_id: null,
  structure_id: null,
};

const initialArticleDetails = {
  title: '',
  content: '',
};

const slice = createSlice({
  name: 'post',
  initialState: {
    basicInformation: initialBasicInformation,
    realEstateInformation: initialRealEstateInformation,
    articleDetails: initialArticleDetails,
    createRealEstate: {
      loading: false,
      data: {},
      error: '',
    },
  },
  reducers: {
    clearCreatePosts: state => {
      state.basicInformation = initialBasicInformation;
      state.realEstateInformation = initialRealEstateInformation;
      state.articleDetails = initialArticleDetails;
    },
  },
  extraReducers: builder => {
    // create form basic info
    builder.addCase(createBasicInformation.fulfilled, (state, action) => {
      state.basicInformation = action.payload;
    });
    // create form real estate info
    builder.addCase(createRealEstateInformation.fulfilled, (state, action) => {
      state.realEstateInformation = action.payload;
    });
    // create form Article Details
    builder.addCase(createArticleDetails.fulfilled, (state, action) => {
      state.articleDetails = action.payload;
    });
    // create form Article Details
    builder.addCase(createRealEstates.pending, state => {
      state.createRealEstate.loading = true;
    });
    builder.addCase(createRealEstates.fulfilled, (state, action) => {
      state.createRealEstate.loading = false;
      state.createRealEstate.data = action.payload;
      state.createRealEstate.error = '';
    });
    builder.addCase(createRealEstates.rejected, (state, action) => {
      state.createRealEstate.loading = false;
      state.createRealEstate.error = action.payload;
    });
  },
});

export const { clearCreatePosts } = slice.actions;

export const postReducer = slice.reducer;
