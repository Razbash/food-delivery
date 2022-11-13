import IUser from "../../interfaces/IUser";

interface IProps {
    userData: IUser,
}

const UserPersonalInformation = (props: IProps) => {
    const {image, firstName, lastName, email, phone, notifications} = props.userData;
    const globalNotifications = [
        "New deals",
        "Order statuses",
        "Special offers",
        "New reustorants",
        "Password changes",
        "Newsletter"
    ];

    return(
        <div className="user-personal-information">
            <div className="user-personal-information__content user-profile-content">
                <h6 className="user-personal-information__content-title user-profile-block-title">Personal information</h6>
                <div className="user-personal-information__chapter user-profile-chapter">
                    <span className="user-personal-information__label">Avatar</span>
                    <div className="user-personal-information__image-controls">
                        <img src={image}
                            alt="user image"
                            className="user-personal-information__user-image"
                            width={88}
                            height={88}
                        />
                        <button className="button button--outlined-blue user-personal-information__cnahge-button">Change</button>
                        <button className="button button--text-gray">Remove</button>
                    </div>

                    <div className="user-personal-information__textareas">
                        <div className="input-wrapper">
                            <label htmlFor="first_name" className="input-label">First name</label>
                            <input type="text"
                                id="first_name"
                                className="input"
                                placeholder="Jane"
                                value={firstName}
                            />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="last_name" className="input-label">Last name</label>
                            <input type="text"
                                id="last_name"
                                className="input"
                                placeholder="Robetson"
                                value={lastName}
                            />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="email" className="input-label">Email</label>
                            <input type="email"
                                id="email"
                                className="input"
                                placeholder="name@example.com"
                                value={email}
                            />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="phone" className="input-label">Phone</label>
                            <input type="text"
                                id="phone"
                                className="input"
                                placeholder="(217) 555-0113"
                                value={phone}
                            />
                        </div>
                    </div>
                </div>

                <h6 className="user-personal-information__content-title">Email notifications</h6>
                <div className="user-personal-information__chapter user-profile-chapter">
                    <div className="user-personal-information__notifications">
                        {globalNotifications.map((element, index) => {
                            return(
                                <label className="checkbox" key={index}>
                                    <input type="checkbox" className="checkbox__input" checked={notifications.includes(element)}/>
                                    <span className="checkbox__label">{element}</span>
                                </label>
                            )
                        })}
                    </div>

                    <div className="user-personal-information__controls">
                        <button className="button button--outlined-red">Log out</button>
                        <button className="button button--outlined-gray">Discard changes</button>
                        <button className="button button--contained">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPersonalInformation;