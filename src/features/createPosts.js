import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestCreateRealEstates,
  requestGetAllInformation,
  requestGetListRank,
} from '../api';

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
    console.log('🚀 ~ file: createPosts.js:61 ~ params:', params);
    try {
      const { data } = await requestCreateRealEstates(params);
      console.log('🚀 ~ file: createPosts.js:43 ~ data:', data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log('🚀 ~ file: createPosts.js:45 ~ error:', error);
      return rejectWithValue('Loi tao bai dang');
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
  price_unit: null,
  width: '',
  length: '',
  lane_width: '',
  bathroom: null,
  bedroom: null,
  main_door_direction_id: null,
  structure_id: null,
  legal_documents_id: null,
  house_status_id: null,
  usage_condition_id: null,
  location_type_id: null,
};

const initialArticleDetails = {
  title: '',
  content: '',
  name: '',
  phone_number: '',
  type: null,
  urlVideo: '',
  isPhoto: true,
  photo: [],
  video: [],
};

const slice = createSlice({
  name: 'post',
  initialState: {
    loading: false,
    error: '',
    basicInformation: initialBasicInformation,
    realEstateInformation: initialRealEstateInformation,
    articleDetails: initialArticleDetails,
    realEstateType: [],
    information: [],
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
    // get all info
    builder.addCase(getAllInformation.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllInformation.fulfilled, (state, action) => {
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
    builder.addCase(getListRank.fulfilled, (state, action) => {
      state.loading = false;
      state.rank = action.payload;
    });
  },
});

export const { clearCreatePosts } = slice.actions;

export const postReducer = slice.reducer;
