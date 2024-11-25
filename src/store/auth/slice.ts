import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AuthState {
    user: User | null;
    token: string | null;
    state: string;
}

interface User {
    id: string;
    name: string;
    email: string;
}

interface LoginPayload {
    user: User;
    token: string;
}

const initialState: AuthState = {
    user: null,
    token: null,
    state: "authenticated",
    // state: "no-authenticated",
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.state = "authenticated";
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.state = "no-authenticated";
        },
        updateToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
});

export const { login, logout, updateToken } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
