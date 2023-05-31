import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestPostPayment } from '../api';

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

const slice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    error: '',
    data: {},
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
  },
});

export const paymentReducer = slice.reducer;
