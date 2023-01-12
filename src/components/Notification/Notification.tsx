import { useAppDispatch, useAppSelector } from "../../store/redux";
import { InfoIcon, SucssesIcon, WarningIcon, CrossIcon } from "../../assets/icons";
import { stopNotification, NotificationTypes } from ".";

import "./notification.scss";

const Notification = () => {
    const dispatch = useAppDispatch();
    const {open, notificationData} = useAppSelector(state => state.notification);

    let notificationMeta = "notification notification--" + notificationData.type;
    let icon;

    if (open) {
        notificationMeta += " notification--open"
    }

    switch (notificationData.type) {
        case NotificationTypes.error:
            icon = <InfoIcon/>;
            break;
        case NotificationTypes.sucsses:
            icon = <SucssesIcon/>;
            break;
        case NotificationTypes.info:
            icon = <InfoIcon/>;
            break;
        case NotificationTypes.warning:
            icon = <WarningIcon/>;
            break;
    }

    const closeNotification = () => {
        dispatch(stopNotification());
    }

    return(
        <div className={notificationMeta}>
            <div className="notification__wrapper">
                <div className="notification__icon">
                    {icon}
                </div>
                <span className="notification__text">
                    {notificationData.text}
                </span>
                <div className="notification__close" onClick={closeNotification}>
                    <CrossIcon/>
                </div>
            </div>
        </div>
    )
}

export default Notification;