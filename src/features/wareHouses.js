import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  requestCreateWareHouse,
  requestGetAgency,
  requestGetAllWareHouse,
  requestGetRealEstateWarehouses,
} from '../api';

export const selectWareHouses = state => state.wareHouses;

export const loadListAllWareHouses = createAsyncThunk(
  'getListAllWareHouses',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await requestGetAllWareHouse();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

export const loadListAgency = createAsyncThunk(
  'getListAgency',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await requestGetAgency();
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

export const loadRealEstateWarehouses = createAsyncThunk(
  'getRealEstateWarehouses',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = params
        ? await requestGetRealEstateWarehouses(params)
        : await requestGetRealEstateWarehouses({
            sort_by: 'createdAt',
          });

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

export const createWareHouse = createAsyncThunk(
  'createWareHouse',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = requestCreateWareHouse(params);
      console.log('🚀 ~ file: wareHouses.js:58 ~ data:', response);

      return fulfillWithValue(response);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống.');
    }
  }
);

const slice = createSlice({
  name: 'wareHouses',
  initialState: {
    loadinglistAllWareHouses: false,
    loadingListAgency: false,
    loadingRealEstateWarehouses: false,
    listAllWareHouses: [],
    listAgency: [],
    listRealEstateWarehouses: [],
    page: 1,
    limit: 10,
    page_size: 10,
    error: '',
  },
  extraReducers: builder => {
    // get all warehouses

    builder.addCase(loadListAllWareHouses.pending, state => {
      state.loadinglistAllWareHouses = true;
    });
    builder.addCase(loadListAllWareHouses.fulfilled, (state, action) => {
      state.loadinglistAllWareHouses = false;
      state.listAllWareHouses = action.payload;
      state.error = '';
    });
    builder.addCase(loadListAllWareHouses.rejected, (state, action) => {
      state.loadinglistAllWareHouses = false;
      state.listAllWareHouses = [];
      state.error = action.payload;
    });

    // get all agency

    builder.addCase(loadListAgency.pending, state => {
      state.loadingListAgency = true;
    });
    builder.addCase(loadListAgency.fulfilled, (state, action) => {
      state.loadingListAgency = false;
      state.listAgency = action.payload;
      state.error = '';
    });
    builder.addCase(loadListAgency.rejected, (state, action) => {
      state.loadingListAgency = false;
      state.listAgency = [];
      state.error = action.payload;
    });

    // get Real Estate Warehouses
    builder.addCase(loadRealEstateWarehouses.pending, state => {
      state.loadingRealEstateWarehouses = true;
    });
    builder.addCase(loadRealEstateWarehouses.fulfilled, (state, action) => {
      state.loadingRealEstateWarehouses = false;
      state.listRealEstateWarehouses = action.payload;
      state.error = '';
    });
    builder.addCase(loadRealEstateWarehouses.rejected, (state, action) => {
      state.loadingRealEstateWarehouses = false;
      state.listRealEstateWarehouses = [];
      state.error = action.payload;
    });
    // create/update ware house
    builder.addCase(createWareHouse.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const wareHousesReducer = slice.reducer;
