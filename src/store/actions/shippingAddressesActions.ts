import { AppDispatch } from "..";
import axios from "../../axios/index";
import {IShippingAddress} from "../../interfaces/IShippingAddresses";
import { shippingAddressesSlice } from "../slices/shippingAddressesSlice";
import { startNotification } from "./notificationActions";
import NotificationTypes from "../../enums/NotificationTypes";

export const fetchShippingAddresses = (userId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(shippingAddressesSlice.actions.fetching());
            const response = await axios.get(`shippingAddresses?userId=${userId}`);
            dispatch(shippingAddressesSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(shippingAddressesSlice.actions.fetchError(error as Error));
        }
    }
}

export const sendShippingAddresses = (shippingAddressData: IShippingAddress, userId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(shippingAddressesSlice.actions.fetching());
            const response = await axios({
                method: 'POST',
                url: `shippingAddresses`,
                data: {
                    ...shippingAddressData
                }
            });
            dispatch(fetchShippingAddresses(userId));
            dispatch(startNotification({type: NotificationTypes.sucsses, text: "The address has been added"}));
        } catch (error) {
            dispatch(shippingAddressesSlice.actions.fetchError(error as Error));
            dispatch(startNotification({type: NotificationTypes.error, text: "An error occurred while updating"}));
        }
    }
}