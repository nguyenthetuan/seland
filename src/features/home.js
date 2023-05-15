import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestGetListProjects,
  requestGetListRealEstateByLocation,
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
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetListProjects();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
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
  },
});

export const homeReducer = slice.reducer;
