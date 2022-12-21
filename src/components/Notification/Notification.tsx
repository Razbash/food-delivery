import SucssesIcon from "../../assets/icons/SucssesIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import WarningIcon from "../../assets/icons/WarningIcon";
import NotificationTypes from "../../enums/NotificationTypes";
import CrossIcon from "../../assets/icons/CrossIcon";
import { useEffect, useState } from "react";

interface INotificationProps {
    type: NotificationTypes,
    text: string,
    open: boolean
}

const Notification = (props: INotificationProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(props.open);

    let notificationMeta = "notification notification--" + props.type;
    let icon;

    if (isOpen) {
        notificationMeta += " notification--open"
    }

    switch (props.type) {
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

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsOpen(false), 5000);
        }
    }, [isOpen])

    return(
        <div className={notificationMeta}>
            <div className="notification__wrapper">
                <div className="notification__icon">
                    {icon}
                </div>
                <span className="notification__text">
                    {props.text}
                </span>
                <div className="notification__close" onClick={() => setIsOpen(false)}>
                    <CrossIcon/>
                </div>
            </div>
        </div>
    )
}

export default Notification;