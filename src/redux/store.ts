import { configureStore } from "@reduxjs/toolkit";
import localityReducer from './slices/localitySlice'

export const store = configureStore({
    reducer: {
        Locality: localityReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;