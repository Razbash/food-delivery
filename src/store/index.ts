import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../screens/Reustorants/store/restaurantsSlice";
import categoriesReducer from "./Categories/caregoriesSlice";
import filtersReducer from "./Filters/filtersSlice";

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    categories: categoriesReducer,
    selectedFilters: filtersReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];