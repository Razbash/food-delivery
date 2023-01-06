import { AppDispatch } from "..";
import axios from "../../axios/index";
import {ordersSlice} from "../slices/ordersSlice";
import { startNotification } from "./notificationActions";
import NotificationTypes from "../../enums/NotificationTypes";

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

export const sendOrder = (order:any) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `orders`,
                data: {
                    ...order
                }
            });
            dispatch(ordersSlice.actions.fetchSuccess(response.data));
            dispatch(startNotification({type: NotificationTypes.sucsses, text: "The order has been created"}));
        } catch (error) {
            dispatch(ordersSlice.actions.fetchError(error as Error));
            dispatch(startNotification({type: NotificationTypes.error, text: "Error when creating an order"}));
        }
    }
}