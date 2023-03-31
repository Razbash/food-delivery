import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IShippingAddressWithId from '../interfaces/IShippingAddressWithId';

interface ShippingAddressesState {
    loading: boolean,
    error: string,
    shippingAddresses: IShippingAddressWithId[],
}

const initialState:ShippingAddressesState = {
    loading: false,
    error: '',
    shippingAddresses: [],
};

export const shippingAddressesSlice = createSlice({
    name: 'shippingAddresses',
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IShippingAddressWithId[]>) {
            state.loading = false;
            state.shippingAddresses = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default shippingAddressesSlice.reducer;