import { combineReducers, configureStore } from '@reduxjs/toolkit';

import restaurantsReducer   from '../screens/Reustorants/store/restaurantsSlice';

import notificationReducer  from '../store/Notification/notificationSlice';
import restaurantReducer    from '../screens/RestaurantDetail/store/restaurantSlice';

import promotionsReducer    from '../screens/Home/store/promotionsSlice';
import productReducer       from '../screens/ProductDetail/store/productSlice';
import dealsReducer         from '../screens/Deals/store/dealsSlice';
import userReducer          from '../store/User/userSlice';
import shippingAddressesReducer   from '../screens/Account/store/shippingAddressesSlice';

import productsReducer      from './Products/productsSlice';
import filtersReducer       from './Filters/filtersSlice';
import categoriesReducer    from './Categories/caregoriesSlice';

const rootReducer = combineReducers({
    restaurants:            restaurantsReducer,
    categories:             categoriesReducer,
    selectedFilters:        filtersReducer,
    notification:           notificationReducer,
    restaurant:             restaurantReducer,
    products:               productsReducer,
    promotions:             promotionsReducer,
    product:                productReducer,
    deals:                  dealsReducer,
    user:                   userReducer,
    shippingAddresses:      shippingAddressesReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];