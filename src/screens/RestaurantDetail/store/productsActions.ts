import { AppDispatch } from "../../../store";
import axios from "../../../utils/axios";
import { productsSlice } from "./productsSlice";

export const fetchProducts = (restaurantId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productsSlice.actions.fetching());
            const response = await axios.get(`products?restaurantId=${restaurantId}`);
            dispatch(productsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(productsSlice.actions.fetchError(error as Error));
        }
    }
}