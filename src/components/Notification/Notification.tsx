import SucssesIcon from "../../assets/icons/SucssesIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import WarningIcon from "../../assets/icons/WarningIcon";
import NotificationTypes from "../../enums/NotificationTypes";
import CrossIcon from "../../assets/icons/CrossIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {stopNotification} from "../../store/actions/notificationActions";

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