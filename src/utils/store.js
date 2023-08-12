import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const localStorageToken = localStorage.getItem('token');

const initialState = {
  auth: {
    token: localStorageToken || null,
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: initialState,
});

export default store;