import { AppDispatch } from "..";
import axios from "../../axios/index";
import {dealsSlice} from "../slices/dealsSlice";

export const fetchDeals = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(dealsSlice.actions.fetching());
            const response = await axios.get('deals');
            dispatch(dealsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(dealsSlice.actions.fetchError(error as Error));
        }
    }
}