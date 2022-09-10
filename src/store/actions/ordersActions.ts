import { AppDispatch } from "..";
import axios from "../../axios/index";
import {ordersSlice} from "../slices/ordersSlice";

export const fetchOrders = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(ordersSlice.actions.fetching());
            const response = await axios.get('orders');
            dispatch(ordersSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(ordersSlice.actions.fetchError(error as Error));
        }
    }
}