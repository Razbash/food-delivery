import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IRestaurant from '../../../interfaces/IRestaurant';

interface RestaurantState {
    restaurantLoading: boolean,
    restaurantError: string,
    restaurant: IRestaurant,
}

const initialState:RestaurantState = {
    restaurantLoading: false,
    restaurantError: '',
    restaurant: {
        id: 0,
        name: '',
        minDeliveryTime: 0,
        maxDeliveryTime: 0,
        minAmount: 0,
        categoriesId: [],
        featured: false,
        image: '',
        description: '',
    },
};

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.restaurantLoading = true;
        },
        fetchSuccess(state, action: PayloadAction<IRestaurant>) {
            state.restaurantLoading = false;
            state.restaurant = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.restaurantError = action.payload.message;
        },
    },
});

export default restaurantSlice.reducer;