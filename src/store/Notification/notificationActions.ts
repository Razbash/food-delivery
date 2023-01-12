import { AppDispatch } from "..";
import INotificationPayload from "../../components/Notification/interfaces/INotificationPayload";
import {notificationSlice} from "./notificationSlice";

export const startNotification = (payload: INotificationPayload) => {
    return (dispatch: AppDispatch) => {
        dispatch(notificationSlice.actions.start(payload));

        setTimeout(() => dispatch(notificationSlice.actions.stop()), 5000);
    }
}

export const stopNotification = () => {
    return (dispatch: AppDispatch) => {
        dispatch(notificationSlice.actions.stop());
    }
}