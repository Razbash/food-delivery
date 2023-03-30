import { AppDispatch } from '../../../store';

import axios from '../../../utils/axios';

import {dealsSlice} from './dealsSlice';

export const fetchDeals = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(dealsSlice.actions.fetching());
            const response = await axios.get('deals');
            dispatch(dealsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(dealsSlice.actions.fetchError(error as Error));
        }
    };
};