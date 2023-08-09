import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: '', // Stockez ici le jeton
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token; // Mettez à jour le jeton
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
