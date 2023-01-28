import { AppDispatch } from "../../../store";
import {dealsSlice} from "./dealsSlice";
import axios from "../../../utils/axios";

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