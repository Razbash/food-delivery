import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IReaustorant from '../../interfaces/IReustorant';

interface ReustorantState {
    loading: boolean,
    error: string,
    reustorant: IReaustorant,
}

const initialState:ReustorantState = {
    loading: false,
    error: '',
    reustorant: {
        id: 0,
        name: "",
        minDeliveryTime: 0,
        maxDeliveryTime: 0,
        minAmount: 0,
        categories: [],
        featured: false,
        image: "",
        description: ""
    },
}

export const reustorantSlice = createSlice({
    name: 'reustorant',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IReaustorant>) {
            state.loading = false;
            state.reustorant = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default reustorantSlice.reducer;