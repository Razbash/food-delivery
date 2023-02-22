import { AppDispatch } from "..";
import axios from "../../utils/axios";
import { productsSlice } from "./productsSlice";

export const fetchProducts = (restaurantId?: number) => {
    return async (dispatch: AppDispatch) => {
        const reqest = restaurantId
            ? `products?restaurantId=${restaurantId}`
            : 'products';

        try {
            dispatch(productsSlice.actions.fetching());
            const response = await axios.get(reqest);
            dispatch(productsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(productsSlice.actions.fetchError(error as Error));
        }
    }
}