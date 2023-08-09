import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null, // Stockez ici le jeton
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token; // Mettez à jour le jeton lors de la connexion
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null; // Effacez le jeton lors de la déconnexion
        },
    }
});

export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;

export default authSlice.reducer;
