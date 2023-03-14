import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IDeal from '../interfaces/IDeal';

interface DealsState {
    loading: boolean,
    error: string,
    deals: IDeal[],
}

const initialState:DealsState = {
    loading: false,
    error: '',
    deals: [],
};

export const dealsSlice = createSlice({
    name: 'deals',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IDeal[]>) {
            state.loading = false;
            state.deals = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.error = action.payload.message;
        },
    },
});

export default dealsSlice.reducer;