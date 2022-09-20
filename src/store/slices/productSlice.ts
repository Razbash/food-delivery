import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../../interfaces/IProduct';

interface ProductState {
    loading: boolean,
    error: string,
    product: IProduct,
}

const initialState:ProductState = {
    loading: false,
    error: '',
    product: {
        id: 0,
        name: "",
        description: "",
        price: 0,
        image: "",
        ingredients: "",
        nutritionalValue: "",
        images: []
    },
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IProduct>) {
            state.loading = false;
            state.product = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default productSlice.reducer;