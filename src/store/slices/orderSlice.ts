import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderWithId } from '../../interfaces/IOrder';

interface OrderState {
    loading: boolean,
    error: string,
    order: IOrderWithId,
}

const initialState:OrderState = {
    loading: false,
    error: '',
    order: {
        id: 0,
        creationDate: "",
        creationTime: "",
        address: {
            id: 0,
            addressName: "",
            country: "",
            state: "",
            city: "",
            addressLine1: "",
        },
        payment: "",
        products: [],
        totalAmount: 0,
        customerId: 0,
        status: "",
    },
}

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IOrderWithId>) {
            state.loading = false;
            state.order = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default orderSlice.reducer;