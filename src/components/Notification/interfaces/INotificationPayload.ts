import { NotificationTypes } from '..';

interface INotificationPayload {
    type: NotificationTypes,
    text: string,
}

export default INotificationPayload;