import { AppDispatch } from '../../../store';
import axios from '../../../utils/axios';

import { promotionsSlice } from './promotionsSlice';

export const fetchPromotions = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(promotionsSlice.actions.fetching());
            const response = await axios.get('promotions');
            dispatch(promotionsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(promotionsSlice.actions.fetchError(error as Error));
        }
    };
};