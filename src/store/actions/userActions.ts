import { AppDispatch } from "..";
import axios from "../../axios/index";
import { userSlice } from "../slices/userSlice";
import { startNotification } from "./notificationActions";
import NotificationTypes from "../../enums/NotificationTypes";

interface IFetchUserProps {
    id: number,
}

interface IUserData {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    image?: string,
}

export const fetchUser = (props: IFetchUserProps) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.fetching());
            const response = await axios.get(`users/${props.id}`);
            dispatch(userSlice.actions.fetchSuccess(response.data));
        } catch (error) {
            dispatch(userSlice.actions.fetchError(error as Error));
        }
    }
}

export const sendUserData = (userData: IUserData) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.fetching());
            const response = await axios({
                method: 'PATCH',
                url: `users/${userData.id}`,
                data: {
                    image: userData.image,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    phone: userData.phone
                }
            });

            dispatch(userSlice.actions.fetchSuccess(response.data));
            dispatch(startNotification({type: NotificationTypes.sucsses, text: "Profile updated"}));
        } catch (error) {
            dispatch(userSlice.actions.fetchError(error as Error));
            dispatch(startNotification({type: NotificationTypes.error, text: "An error occurred while updating"}));
        }
    }
}