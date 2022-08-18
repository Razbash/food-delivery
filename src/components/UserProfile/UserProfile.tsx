import CardIcon from "../../assets/icons/CardIcon";
import GeoIcon from "../../assets/icons/GeoIcon";
import ShieldIcon from "../../assets/icons/ShieldIcon";
import UserIcon from "../../assets/icons/UserIcon";
import UserPersonalInformation from "../UserPersonalInformation/UserPersonalInformation";
import UserAddresses from "../UserAddresses/UserAddresses";

const UserProfile = () => {
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

    return(
        <div className="user-profile">
            <div className="user-profile__navigation">
                <h5 className="block-title">Settings</h5>
                <div className="user-profile__tabs">
                    {tabs.map((element, index) => {
                        const {title, description, icon} = element;

                        return(
                            <div className="user-profile__tab-item" key={index} tabIndex={1}>
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

            {/* <UserPersonalInformation/> */}
            <UserAddresses/>
        </div>
    )
}

export default UserProfile;