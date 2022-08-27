import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dealsReducer from './slices/dealsSlice';
import categoriesReducer from './slices/caregoriesSlice';
import reustorantsReducer from './slices/reustorantsSlice';

const rootReducer = combineReducers({
    deals: dealsReducer,
    categories: categoriesReducer,
    reustorants: reustorantsReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];