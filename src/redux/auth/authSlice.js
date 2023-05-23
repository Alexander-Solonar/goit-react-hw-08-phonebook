import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, register } from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
};

const handleRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggenIn = true;
};

const handleLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggenIn = true;
};

const handleLogOut = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggenIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegister)
      .addCase(login.fulfilled, handleLogin)
      .addCase(logOut.fulfilled, handleLogOut);
  },
});

const persistConfig = {
  key: 'contact',
  storage,
  whitelist: ['token'],
};
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
