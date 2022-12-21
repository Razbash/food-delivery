import NotificationTypes from "../enums/NotificationTypes";

interface INotificationPayload {
    type: NotificationTypes,
    text: string,
}

export default INotificationPayload;