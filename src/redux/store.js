import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import mapDataReducer from './slices/mapDataSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        mapData: mapDataReducer
    },
})