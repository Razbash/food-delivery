import { AppDispatch } from "..";
import INotificationPayload from "../../interfaces/INotification";
import {notificationSlice} from "../slices/notificationSlice";

export const startNotification = (payload: INotificationPayload) => {
    return (dispatch: AppDispatch) => {
        dispatch(notificationSlice.actions.start(payload));

        setTimeout(() => dispatch(notificationSlice.actions.stop()), 500000);
    }
}

export const stopNotification = () => {
    return (dispatch: AppDispatch) => {
        dispatch(notificationSlice.actions.stop());
    }
}