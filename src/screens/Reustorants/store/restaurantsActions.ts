import axios from "../../../utils/axios";
import { AppDispatch } from "../../../store";
import { restaurantsSlice } from "../store/restaurantsSlice";

export const fetchRestaurants = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(restaurantsSlice.actions.fetching());
            const response = await axios.get('reustorants');
            dispatch(restaurantsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(restaurantsSlice.actions.fetchError(error as Error));
        }
    }
}