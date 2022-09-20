import { AppDispatch } from "..";
import axios from "../../axios/index";
import { productSlice } from "../slices/productSlice";

interface IFetchProductProps {
    id: number,
}

export const fetchProduct = (props: IFetchProductProps) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(productSlice.actions.fetching());
            const response = await axios.get(`products/${props.id}`);
            dispatch(productSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(productSlice.actions.fetchError(error as Error));
        }
    }
}