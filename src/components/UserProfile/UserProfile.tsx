import CardIcon from "../../assets/icons/CardIcon";
import GeoIcon from "../../assets/icons/GeoIcon";
import ShieldIcon from "../../assets/icons/ShieldIcon";
import UserIcon from "../../assets/icons/UserIcon";
import UserPersonalInformation from "../UserPersonalInformation/UserPersonalInformation";
import UserAddresses from "../UserAddresses/UserAddresses";
import Payments from "../Payments/Payments";
import UserSecurity from "../UserSecurity/UserSecurity";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../store/actions/userActions";

const UserProfile = () => {
    const [currentTabId, setCurrentTabId] = useState<Number>(0);
    const {user, loading, error} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        let userCookie = document.cookie.match(/userId=(.+?);/);
        const userId = userCookie ? userCookie[1] : null;

        if (!userId) {
            navigate('/auth');
        }

        dispatch(fetchUser({id: Number(userId)}));
    }, []);

    const tabs = [
        {
            title: "Account",
            description: "Personal information",
            icon: <UserIcon/>
        },
        {
            title: "Address",
            description: "Shippings addresses",
            icon: <GeoIcon/>
        },
        {
            title: "Payment method",
            description: "Connected credit cards",
            icon: <CardIcon/>
        },
        {
            title: "Security",
            description: "Password, 2FA",
            icon: <ShieldIcon/>
        },
    ];

    const onTabClickHandler = (id: number) => {
        setCurrentTabId(id);
    }

    return(
        <div className="user-profile">
            <div className="user-profile__navigation">
                <h5 className="block-title">Settings</h5>
                <div className="user-profile__tabs">
                    {tabs.map((element, index) => {
                        const {title, description, icon} = element;
                        const tabMeta = currentTabId === index ? "user-profile__tab-item user-profile__tab-item--active" : "user-profile__tab-item";

                        return(
                            <div className={tabMeta}
                                key={index}
                                tabIndex={1}
                                onClick={() => onTabClickHandler(index)}
                            >
                                <div className="user-profile__tab-icon-wrapper">
                                    {icon}
                                </div>
                                <div className="user-profile__tab-info">
                                    <span className="user-profile__tab-title">
                                        {title}
                                    </span>
                                    <span className="user-profile__tab-subtitle">
                                        {description}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {currentTabId === 0 ? <UserPersonalInformation userData={user}/> : null}
            {currentTabId === 1 ? <UserAddresses userData={user}/> : null}
            {currentTabId === 2 ? <Payments userData={user} title={"Connected payment methods"} /> : null}
            {currentTabId === 3 ? <UserSecurity/> : null}
        </div>
    )
}

export default UserProfile;