import { AppDispatch } from "..";
import axios from "../../axios/index";
import { orderSlice } from "../slices/orderSlice";

interface IFetchOrderProps {
    id: number,
}

export const fetchOrder = (props: IFetchOrderProps) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(orderSlice.actions.fetching());
            const response = await axios.get(`orders/${props.id}`);
            dispatch(orderSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(orderSlice.actions.fetchError(error as Error));
        }
    }
}