import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IPromotion from '../interface/IPromotion';

interface PromotionsState {
    loading: boolean,
    error: string,
    promotions: IPromotion[],
}

const initialState:PromotionsState = {
    loading: false,
    error: '',
    promotions: [],
}

export const promotionsSlice = createSlice({
    name: 'promotions',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IPromotion[]>) {
            state.loading = false;
            state.promotions = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.error = action.payload.message;
        }
    }
})

export default promotionsSlice.reducer;