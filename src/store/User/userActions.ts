import { AppDispatch } from "..";
import { userSlice } from "./userSlice";
import axios from "../../utils/axios";
import IUser from "../../screens/Auth/interfaces/IUser";
import EnumSendUserTypes from "../../screens/Account/interfaces/EnumSendUserTypes";
import { NotificationTypes, startNotification } from "../../components/Notification";

export const fetchUser = (email: string, id?: number) => {
    return async (dispatch: AppDispatch) => {
        let query;

        if (email) {
            query = `users?email=${email}`;
        } else if (id) {
            query = `users?id=${id}`;
        }

        if (query) {
            try {
                dispatch(userSlice.actions.fetching());
                const response = await axios.get(query);
                dispatch(userSlice.actions.fetchSuccess(response.data[0]));
            } catch (error) {
                dispatch(userSlice.actions.fetchError(error as Error));
            }
        }
    }
}

export const sendUser = (user: IUser, type: EnumSendUserTypes) => {
    let method: string;
    let url: string;

    if (type === EnumSendUserTypes.CREATE) {
        method  = 'POST';
        url     = 'users';
    } else if (type === EnumSendUserTypes.UPDATE) {
        method  = 'PATCH';
        url     = `users/${user.id}`;
    }

    return async (dispatch: AppDispatch) => {
        try {
            await axios({
                method: method,
                url: url,
                data: {
                    ...user
                }
            });

            dispatch(startNotification({
                type: NotificationTypes.sucsses,
                text: `Data saved successfully`
            }));
        } catch (error) {
            dispatch(userSlice.actions.fetchError(error as Error));
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `Error when saving data ${error}`
            }));
        }
    }
}