import { NotificationTypes, startNotification } from '../../../components/Notification';
import { AppDispatch } from '../../../store';
import axios from '../../../utils/axios';
import IShippingAddress from '../interfaces/IShippingAddress';

import { shippingAddressesSlice } from './shippingAddressesSlice';

export const fetchShippingAddresses = (userId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(shippingAddressesSlice.actions.fetching());
            const response = await axios.get(`shippingAddresses?userId=${userId}`);
            dispatch(shippingAddressesSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(shippingAddressesSlice.actions.fetchError(error as Error));
        }
    };
};

export const sendShippingAddresses = (shippingAddressData: IShippingAddress, userId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(shippingAddressesSlice.actions.fetching());
            const response = await axios({
                method: 'POST',
                url: 'shippingAddresses',
                data: {
                    ...shippingAddressData,
                },
            });
            dispatch(fetchShippingAddresses(userId));
            dispatch(startNotification({type: NotificationTypes.sucsses, text: 'The address has been added'}));
        } catch (error) {
            dispatch(shippingAddressesSlice.actions.fetchError(error as Error));
            dispatch(startNotification({type: NotificationTypes.error, text: 'An error occurred while updating'}));
        }
    };
};