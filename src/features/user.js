import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGetListAccountPackage, requestGetProfile, requestUpdateProfile } from '../api';

export const selectUser = state => state.user;

export const getProfile = createAsyncThunk(
  'getProfile',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetProfile();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error?.data?.phone_number?.[0]);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'updateProfile',
  async (input, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestUpdateProfile(input);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error?.data?.error);
    }
  }
);

export const getListAccountPackage = createAsyncThunk(
  'getListAccountPackage',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetListAccountPackage();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error?.data?.error);
    }
  }
);

const initialUser = {
  id: 0,
  avatar: '',
  user_type_id: 1,
  name: '',
  sex: null,
  birthday: '',
  phone_number: '',
  email: '',
  address: '',
  ward_id: null,
  district_id: null,
  province_id: null,
  name_company: '',
  company_address: '',
  company_ward_id: null,
  company_district_id: null,
  company_province_id: null,
  tax_code: '',
  website: '',
  is_phone_verified: 0,
};

const slice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    data: initialUser,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(getProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.data = initialUser;
      state.error = action.payload;
    });
    builder.addCase(updateProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getListAccountPackage.pending, state => {
      state.loading = true;
    });
    builder.addCase(getListAccountPackage.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(getListAccountPackage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const userReducer = slice.reducer;
