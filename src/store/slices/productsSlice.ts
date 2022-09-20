import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../../interfaces/IProduct';

interface ProductsState {
    loading: boolean,
    error: string,
    products: IProduct[],
}

const initialState:ProductsState = {
    loading: false,
    error: '',
    products: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IProduct[]>) {
            state.loading = false;
            state.products = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default productsSlice.reducer;