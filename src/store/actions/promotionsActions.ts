import { AppDispatch } from "..";
import axios from "../../axios/index";
import { promotionsSlice } from "../slices/promotionsSlice";

export const fetchPromotions = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(promotionsSlice.actions.fetching());
            const response = await axios.get('promotions');
            dispatch(promotionsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(promotionsSlice.actions.fetchError(error as Error));
        }
    }
}