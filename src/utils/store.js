import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import editingFormReducer from './editingFormSlice';

const localStorageToken = localStorage.getItem('token');
const localStorageUserData = localStorage.getItem('userData');

const initialState = {
  auth: {
    token: localStorageToken || null,
    userData: localStorageUserData || null,
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    editingForm: editingFormReducer,
  },
  preloadedState: initialState,
});

export default store;