import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IReaustorant from '../../interfaces/IReustorant';

interface ReustorantState {
    loading: boolean,
    error: string,
    reustorants: IReaustorant[],
}

const initialState:ReustorantState = {
    loading: false,
    error: '',
    reustorants: [],
}

export const reustorantsSlice = createSlice({
    name: 'reustorant',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IReaustorant[]>) {
            state.loading = false;
            state.reustorants = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default reustorantsSlice.reducer;