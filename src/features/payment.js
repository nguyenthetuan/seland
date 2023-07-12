import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestPostPayment } from '../api';
import { requestBuyPackage, requestCreateTransaction, requestGetVNPayURL } from '../api/payment';

export const selectPayment = state => state.payment;

export const createPayment = createAsyncThunk(
  'createPayment',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestPostPayment(params);
      return fulfillWithValue({ ...data });
    } catch (error) {
      return rejectWithValue('Loi tao bai dang');
    }
  }
);

export const createTransaction = createAsyncThunk(
  'createTransaction',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestCreateTransaction(params);
      return fulfillWithValue({ ...data });
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống, vui lòng thử lại sau.');
    }
  }
);

export const getVNPayUrl = createAsyncThunk(
  'getVNPayUrl',
  async (amount, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestGetVNPayURL(amount);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống, vui lòng thử lại sau.');
    }
  }
);

export const buyPackage = createAsyncThunk(
  'buyPackage',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requestBuyPackage(params);
      return fulfillWithValue({ ...data });
    } catch (error) {
      return rejectWithValue('Lỗi hệ thống, vui lòng thử lại sau.');
    }
  }
);

const slice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    error: '',
    data: {},
    transaction: {},
    loadingCreateTransaction: false,
    vnPayUrl: '',
  },
  extraReducers: builder => {
    builder.addCase(createPayment.pending, state => {
      state.loading = true;
    });
    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createPayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createTransaction.pending, state => {
      state.loadingCreateTransaction = true;
    });
    builder.addCase(createTransaction.fulfilled, (state, action) => {
      state.loadingCreateTransaction = false;
      state.transaction = action.payload;
    });
    builder.addCase(createTransaction.rejected, (state, action) => {
      state.loadingCreateTransaction = false;
      state.error = action.payload;
    });
    builder.addCase(getVNPayUrl.pending, state => {
      state.loading = true;
    });
    builder.addCase(getVNPayUrl.fulfilled, (state, action) => {
      state.loading = false;
      state.vnPayUrl = action.payload;
    });
    builder.addCase(getVNPayUrl.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(buyPackage.pending, state => {
      state.loading = true;
    });
    builder.addCase(buyPackage.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(buyPackage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const paymentReducer = slice.reducer;
