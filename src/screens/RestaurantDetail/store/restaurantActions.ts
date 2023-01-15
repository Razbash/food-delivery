import axios from "../../../utils/axios";
import { AppDispatch } from "../../../store";
import { restaurantSlice } from "./restaurantSlice";

export const fetchReustorant = (id: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(restaurantSlice.actions.fetching());
            const response = await axios.get(`restaurants/${id}`);
            dispatch(restaurantSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(restaurantSlice.actions.fetchError(error as Error));
        }
    }
}