import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null, // Stockez ici le jeton
        userData : null,// Stockez ici les infos utilisateurs
    },
    reducers: {
        setCredentials: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(action.payload));
        },
        login: (state, action) => {
            state.token = action.payload.token; // Mettez à jour le jeton lors de la connexion
            localStorage.setItem('token', state.token);
        },
        logout: (state) => {
            state.token = null; // Effacez le jeton lors de la déconnexion
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
        },
    }
});

export const { setCredentials } = authSlice.actions;
export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;

export default authSlice.reducer;