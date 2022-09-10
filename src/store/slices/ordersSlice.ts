import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IOrder from '../../interfaces/IOrder';

interface OrdersState {
    loading: boolean,
    error: string,
    orders: IOrder[],
}

const initialState:OrdersState = {
    loading: false,
    error: '',
    orders: [],
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IOrder[]>) {
            state.loading = false;
            state.orders = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
})

export default ordersSlice.reducer;