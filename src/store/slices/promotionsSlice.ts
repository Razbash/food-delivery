import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IPromo from '../../interfaces/IPromo';

interface PromotionsState {
    loading: boolean,
    error: string,
    promotions: IPromo[],
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
        fetchSuccess(state, action: PayloadAction<IPromo[]>) {
            state.loading = false;
            state.promotions = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default promotionsSlice.reducer;