import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, refresh, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRefresh = (state, action) => {
  state.user = { ...action.payload };
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleIsRefreshing = state => {
  state.isRefreshing = true;
};

const handleIsNotRefreshing = state => {
  state.isRefreshing = false;
};

const handleRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(refresh.pending, handleIsRefreshing)
      .addCase(refresh.fulfilled, handleRefresh)
      .addCase(refresh.rejected, handleIsNotRefreshing)
      .addCase(register.fulfilled, handleRegister)
      .addCase(login.fulfilled, handleLogin)
      .addCase(logOut.fulfilled, handleLogOut);
  },
});

export const authReducer = authSlice.reducer;
