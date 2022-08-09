import CardIcon from "../../assets/icons/CardIcon";
import GeoIcon from "../../assets/icons/GeoIcon";
import ShieldIcon from "../../assets/icons/ShieldIcon";
import UserIcon from "../../assets/icons/UserIcon";
import userImage from "../../assets/images/users/user-1.jpg"

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

            <div className="user-profile__content-wrapper">
                <h5 className="block-title">Account</h5>
                <div className="user-profile__content">
                    <h6 className="user-profile__content-title">Personal information</h6>
                    <div className="user-profile__chapter">
                        <span className="user-profile__label">Avatar</span>
                        <div className="user-profile__image-controls">
                            <img src={userImage}
                                alt="user image"
                                className="user-profile__user-image"
                                width={88}
                                height={88}
                            />
                            <button className="button button--outlined-blue user-profile__cnahge-button">Change</button>
                            <button className="button button--text-gray">Remove</button>
                        </div>

                        <div className="user-profile__textareas">
                            <div className="input-wrapper">
                                <label htmlFor="first-name" className="input-label">First name</label>
                                <input type="text"
                                    id="first_name"
                                    className="input"
                                    placeholder="Jane"
                                />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="last-name" className="input-label">Last name</label>
                                <input type="text"
                                    id="last_name"
                                    className="input"
                                    placeholder="Robetson"
                                />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="email" className="input-label">Email</label>
                                <input type="email"
                                    id="email"
                                    className="input"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="phone" className="input-label">Phone</label>
                                <input type="text"
                                    id="phone"
                                    className="input"
                                    placeholder="(217) 555-0113"
                                />
                            </div>
                        </div>
                    </div>

                    <h6 className="user-profile__content-title">Email notifications</h6>
                    <div className="user-profile__chapter">
                        <div className="user-profile__notifications">
                            <label className="checkbox">
                                <input type="checkbox" className="checkbox__input"/>
                                <span className="checkbox__label">New deals</span>
                            </label>

                            <label className="checkbox">
                                <input type="checkbox" className="checkbox__input"/>
                                <span className="checkbox__label">New reustorants</span>
                            </label>

                            <label className="checkbox">
                                <input type="checkbox" className="checkbox__input"/>
                                <span className="checkbox__label">Order statuses</span>
                            </label>

                            <label className="checkbox">
                                <input type="checkbox" className="checkbox__input"/>
                                <span className="checkbox__label">Password changes</span>
                            </label>

                            <label className="checkbox">
                                <input type="checkbox" className="checkbox__input"/>
                                <span className="checkbox__label">Special offers</span>
                            </label>

                            <label className="checkbox">
                                <input type="checkbox" className="checkbox__input"/>
                                <span className="checkbox__label">Newsletter</span>
                            </label>
                        </div>

                        <div className="user-profile__controls">
                            <button className="button button--outlined-red">Log out</button>
                            <button className="button button--outlined-gray">Discard changes</button>
                            <button className="button button--contained">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;