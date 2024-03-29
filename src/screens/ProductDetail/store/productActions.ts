import { AppDispatch } from '../../../store';

import axios from '../../../utils/axios';

import { productSlice } from './productSlice';

export const fetchProduct = (id: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching());
            const response = await axios.get(`products/${id}`);
            dispatch(productSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(productSlice.actions.fetchError(error as Error));
        }
    };
};