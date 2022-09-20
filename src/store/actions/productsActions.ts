import { AppDispatch } from "..";
import axios from "../../axios/index";
import { productsSlice } from "../slices/productsSlice";

export const fetchProducts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productsSlice.actions.fetching());
            const response = await axios.get('products');
            dispatch(productsSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(productsSlice.actions.fetchError(error as Error));
        }
    }
}