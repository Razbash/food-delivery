import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dealsReducer from './slices/dealsSlice';

const rootReducer = combineReducers({
    deals: dealsReducer
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];