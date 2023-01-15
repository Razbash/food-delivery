import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IRestaurant from '../../../interfaces/IRestaurant';

interface RestaurantsState {
    loading: boolean,
    error: string,
    restaurants: IRestaurant[],
}

const initialState:RestaurantsState = {
    loading: false,
    error: '',
    restaurants: [],
}

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IRestaurant[]>) {
            state.loading = false;
            state.restaurants = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.error = action.payload.message;
        }
    }
})

export default restaurantsSlice.reducer;