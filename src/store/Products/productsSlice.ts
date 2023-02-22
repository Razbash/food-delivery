import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../../interfaces/IProduct';

interface ProductsState {
    productsLoading: boolean,
    productsError: string,
    products: IProduct[],
}

const initialState:ProductsState = {
    productsLoading: false,
    productsError: '',
    products: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.productsLoading = true;
        },
        fetchSuccess(state, action: PayloadAction<IProduct[]>) {
            state.productsLoading = false;
            state.products = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.productsError = action.payload.message;
        }
    }
})

export default productsSlice.reducer;