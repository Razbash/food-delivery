import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../screens/Reustorants/store/restaurantsSlice";
import categoriesReducer from "./Categories/caregoriesSlice";
import filtersReducer from "./Filters/filtersSlice";
import notificationReducer from "../store/Notification/notificationSlice";
import restaurantReducer from "../screens/RestaurantDetail/store/restaurantSlice";
import productReducer from "../screens/RestaurantDetail/store/productsSlice";

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    categories: categoriesReducer,
    selectedFilters: filtersReducer,
    notification: notificationReducer,
    restaurant: restaurantReducer,
    products: productReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];