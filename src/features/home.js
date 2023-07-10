import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  createAppoinmentApi,
  requestGetListNews,
  requestGetListProjects,
  requestGetListRealEstateByLocation,
  requestGetListRealEstates,
  requestGetListRealEstatesHots,
} from '../api';

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

export const getListProjects = createAsyncThunk(
  'getListProjects',
  async (params, { fulfillWithValue, rejectWithValue }, callback) => {
    try {
      const { data, total } = await requestGetListProjects();
      params?.setTotal(total);
      callback && callback(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

export const getListNews = createAsyncThunk(
  'getListNews',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetListNews();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

export const getListRealEstatesHots = createAsyncThunk(
  'getListRealEstatesHots',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const params = {
        is_hot: 1,
      };
      const { data } = await requestGetListRealEstatesHots(params);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

export const getListRealEstatesForYou = createAsyncThunk(
  'getListRealEstatesForYou',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const value = {
        ...params,
        for_you: 1,
      };
      const { data } = await requestGetListRealEstates(value);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

export const createAppoinment = createAsyncThunk(
  'createAppoinment',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await createAppoinmentApi(params);
      return fulfillWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.message);
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
    listProject: {
      loading: false,
      data: [],
      page: 1,
      limit: 10,
      page_size: 10,
      error: '',
    },
    listNews: {
      loading: false,
      data: [],
      page: 1,
      limit: 10,
      page_size: 10,
      error: '',
    },
    listRealEstatesHots: {
      loading: false,
      data: [],
      page: 1,
      limit: 10,
      page_size: 10,
      error: '',
    },
    listRealEstatesForYou: {
      loading: false,
      data: [],
      page: 1,
      limit: 10,
      page_size: 10,
      error: '',
    },
  },
  extraReducers: builder => {
    // list real estate by location
    builder.addCase(getListRealEstateByLocation.pending, state => {
      state.listRealEstateByLocation.loading = true;
    });
    builder.addCase(getListRealEstateByLocation.fulfilled, (state, action) => {
      state.listRealEstateByLocation.loading = false;
      state.listRealEstateByLocation.data = action.payload;
      state.listRealEstateByLocation.error = '';
    });
    builder.addCase(getListRealEstateByLocation.rejected, (state, action) => {
      state.listRealEstateByLocation.loading = false;
      state.listRealEstateByLocation.data = [];
      state.listRealEstateByLocation.error = action.payload;
    });
    // list project
    builder.addCase(getListProjects.pending, state => {
      state.listProject.loading = true;
    });
    builder.addCase(getListProjects.fulfilled, (state, action) => {
      state.listProject.loading = false;
      state.listProject.data = action.payload;
      state.listProject.error = '';
    });
    builder.addCase(getListProjects.rejected, (state, action) => {
      state.listProject.loading = false;
      state.listProject.data = [];
      state.listProject.error = action.payload;
    });
    // list news
    builder.addCase(getListNews.pending, state => {
      state.listNews.loading = true;
    });
    builder.addCase(getListNews.fulfilled, (state, action) => {
      state.listNews.loading = false;
      state.listNews.data = action.payload;
      state.listNews.error = '';
    });
    builder.addCase(getListNews.rejected, (state, action) => {
      state.listNews.loading = false;
      state.listNews.data = [];
      state.listNews.error = action.payload;
    });
    // list real estate hots
    builder.addCase(getListRealEstatesHots.pending, state => {
      state.listRealEstatesHots.loading = true;
    });
    builder.addCase(getListRealEstatesHots.fulfilled, (state, action) => {
      state.listRealEstatesHots.loading = false;
      state.listRealEstatesHots.data = action.payload;
      state.listRealEstatesHots.error = '';
    });
    builder.addCase(getListRealEstatesHots.rejected, (state, action) => {
      state.listRealEstatesHots.loading = false;
      state.listRealEstatesHots.data = [];
      state.listRealEstatesHots.error = action.payload;
    });
    // list real estate for you
    builder.addCase(getListRealEstatesForYou.pending, state => {
      state.listRealEstatesForYou.loading = true;
    });
    builder.addCase(getListRealEstatesForYou.fulfilled, (state, action) => {
      state.listRealEstatesForYou.loading = false;
      state.listRealEstatesForYou.data = action.payload;
      state.listRealEstatesForYou.error = '';
    });
    builder.addCase(getListRealEstatesForYou.rejected, (state, action) => {
      state.listRealEstatesForYou.loading = false;
      state.listRealEstatesForYou.data = [];
      state.listRealEstatesForYou.error = action.payload;
    });
  },
});

export const homeReducer = slice.reducer;
