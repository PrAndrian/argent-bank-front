import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null, // Stockez ici le jeton
        userData : '',
    },
    reducers: {
        setCredentials: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(action.payload));
        },
        login: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token; // Mettez à jour le jeton lors de la connexion
            localStorage.setItem('token', state.token);
        },
        logout: (state) => {
            state.isAuthenticated = false;
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