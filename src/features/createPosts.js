import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGetProfile } from '../api';

export const selectPosts = state => state.post;

export const createBasicInformation = createAsyncThunk(
  'createBasicInformation',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      return fulfillWithValue(params);
    } catch (error) {
      return rejectWithValue(error?.data?.phone_number?.[0]);
    }
  }
);
export const createRealEstateInformation = createAsyncThunk(
  'createRealEstateInformation',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetProfile();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error?.data?.phone_number?.[0]);
    }
  }
);
export const createArticleDetails = createAsyncThunk(
  'createArticleDetails',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetProfile();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error?.data?.phone_number?.[0]);
    }
  }
);

const initialBasicInformation = {
  real_estate_type_id: '',
  project_id: '',
  address_detail: '',
  province_id: null,
  district_id: null,
  ward_id: null,
  street_id: null,
  longitude: 0,
  latitude: 0,
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
    basicInformation: {
      loading: false,
      data: initialBasicInformation,
      error: '',
    },
    realEstateInformation: {
      loading: false,
      data: initialRealEstateInformation,
      error: '',
    },
    articleDetails: {
      loading: false,
      data: initialArticleDetails,
      error: '',
    },
  },
  reducers: {
    clearCreatePosts: state => {
      console.log('🚀 ~ file: createPosts.js:97 ~ state:', state);

      state.basicInformation.data = initialBasicInformation;
      state.realEstateInformation.data = initialRealEstateInformation;
      state.articleDetails.data = initialArticleDetails;
    },
  },
  extraReducers: builder => {
    // create form basic info
    builder.addCase(createBasicInformation.pending, state => {
      state.basicInformation.loading = true;
    });
    builder.addCase(createBasicInformation.fulfilled, (state, action) => {
      state.basicInformation.loading = false;
      state.basicInformation.data = action.payload;
      state.basicInformation.error = '';
    });
    builder.addCase(createBasicInformation.rejected, (state, action) => {
      state.basicInformation.loading = false;
      state.basicInformation.error = action.payload;
    });
    // create form real estate info
    builder.addCase(createRealEstateInformation.pending, state => {
      state.realEstateInformation.loading = true;
    });
    builder.addCase(createRealEstateInformation.fulfilled, (state, action) => {
      state.realEstateInformation.loading = false;
      state.realEstateInformation.data = action.payload;
      state.realEstateInformation.error = '';
    });
    builder.addCase(createRealEstateInformation.rejected, (state, action) => {
      state.realEstateInformation.loading = false;
      state.realEstateInformation.error = action.payload;
    });
    // create form Article Details
    builder.addCase(createArticleDetails.pending, state => {
      state.articleDetails.loading = true;
    });
    builder.addCase(createArticleDetails.fulfilled, (state, action) => {
      state.articleDetails.loading = false;
      state.articleDetails.data = action.payload;
      state.articleDetails.error = '';
    });
    builder.addCase(createArticleDetails.rejected, (state, action) => {
      state.articleDetails.loading = false;
      state.articleDetails.error = action.payload;
    });
  },
});

export const { clearCreatePosts } = slice.actions;

export const postReducer = slice.reducer;
