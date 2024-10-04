import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

interface AuthSate{
    isAuthenticated: boolean ;
    isLoading: boolean;
}

const initialState = {
    isAuthenticated: false,
    // state1: {
    //     state: {
            
    //     }
    // },
    isLoading: true
} as AuthSate;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
        finishIntiateLoad: state => {
            state.isLoading = false;
        }
    }
});

export const { setAuth, logout, finishIntiateLoad } = authSlice.actions;
export default authSlice.reducer;