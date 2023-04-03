import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import api from '../../api';

export const signup = createAsyncThunk(
  'signup',
  async (input, { rejectWithValue }) =>
    // const {data} = await api.post('', input);
    'qwertyuiopasdfghjklzxcvbnm'
);

export const login = createAsyncThunk(
  'login',
  async (input, { rejectWithValue }) =>
    // const {data} = await api.post('', input);
    'qwertyuiopasdfghjklzxcvbnm'
);

const slice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    token: '',
    error: '',
  },
  reducers: {
    logout: state => {
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(signup.pending, state => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = slice.actions;

export const authReducer = slice.reducer;

export const selectToken = state => state.auth.token;
