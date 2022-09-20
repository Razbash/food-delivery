import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dealsReducer from './slices/dealsSlice';
import categoriesReducer from './slices/caregoriesSlice';
import reustorantsReducer from './slices/reustorantsSlice';
import reustorantReducer from './slices/reustorantSlice';
import ordersReducer from './slices/ordersSlice';
import productReducer from './slices/productSlice';
import productsReducer from './slices/productsSlice';

const rootReducer = combineReducers({
    deals: dealsReducer,
    categories: categoriesReducer,
    reustorants: reustorantsReducer,
    reustorant: reustorantReducer,
    orders: ordersReducer,
    product: productReducer,
    products: productsReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];