import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import authReducer from "./authSlice";

export const makeStore = () =>
    configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: process.env.NODE_ENV !== 'production'
    });



export type AppStore = ReturnType<typeof makeStore>;
export type RooState = ReturnType<AppStore['getState']>;
export type AppDispatch  = AppStore['dispatch'];