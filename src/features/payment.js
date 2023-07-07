import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestPostPayment } from '../api';
import { requestCreateTransaction } from '../api/payment';

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

const slice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    error: '',
    data: {},
    transaction: {},
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
      state.loading = true;
    });
    builder.addCase(createTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.transaction = action.payload;
    });
    builder.addCase(createTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const paymentReducer = slice.reducer;
