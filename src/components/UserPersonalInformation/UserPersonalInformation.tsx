import IUser from "../../interfaces/IUser";
import ImageUploading, {ImageListType} from 'react-images-uploading';
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { sendUserData } from "../../store/actions/userActions";
import Notification from "../../components/Notification/Notification";
import NotificationTypes from "../../enums/NotificationTypes";

interface IProps {
    userData: IUser,
}

const UserPersonalInformation = (props: IProps) => {
    const {id, image, firstName, lastName, email, phone} = props.userData;
    const [userImage, setUserImage] = useState([]);
    const [userFirstName, setUserFirstName] = useState<string>("");
    const [userLastName, setUserLastName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPhone, setUserPhone] = useState<string>("");
    const dispatch = useAppDispatch();
    let activeImage = "";

    useEffect(() => {
        setUserFirstName(firstName);
        setUserLastName(lastName);
        setUserEmail(email);

        if (phone) {
            setUserPhone(phone);
        }
    },[props]);

    const onChangeImage = (newImage: ImageListType) => {
        setUserImage(newImage as never[]);
    }

    const onSaveChanges = () => {
        const userData = {
            id: id,
            image: image,
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            phone: userPhone
        }

        if (userImage.length) {
            userData.image = userImage[0]['data_url'];
        }

        dispatch(sendUserData(userData));
    }

    return(
        <>
            <div className="user-personal-information">
                <div className="user-personal-information__content user-profile-content">
                    <h6 className="user-personal-information__content-title user-profile-block-title">Personal information</h6>
                    <div className="user-personal-information__chapter user-profile-chapter">
                        <span className="user-personal-information__label">Avatar</span>

                        <ImageUploading
                            value={userImage}
                            onChange={onChangeImage}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                            }) => (
                                <div className="user-personal-information__image-controls">
                                    {/* Рефакторинг */}
                                    <div style={{"display": "none"}}>{activeImage = imageList.length ? imageList[0].data_url : image}</div>

                                    <div className="user-personal-information__user-image"
                                        style={{"backgroundImage": "url(" + activeImage + ")"}}
                                    ></div>

                                    <button className="button button--outlined-blue user-personal-information__cnahge-button"
                                        onClick={onImageUpload}
                                    >
                                        Change
                                    </button>
                                    <button className="button button--text-gray">Remove</button>
                                </div>
                            )}
                        </ImageUploading>

                        <div className="user-personal-information__textareas">
                            <div className="input-wrapper">
                                <label htmlFor="first_name" className="input-label">First name</label>
                                <input type="text"
                                    id="first_name"
                                    className="input"
                                    placeholder="Jane"
                                    value={userFirstName}
                                    onChange={(e) => setUserFirstName(e.target.value)}
                                />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="last_name" className="input-label">Last name</label>
                                <input type="text"
                                    id="last_name"
                                    className="input"
                                    placeholder="Robetson"
                                    value={userLastName}
                                    onChange={(e) => setUserLastName(e.target.value)}
                                />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="email" className="input-label">Email</label>
                                <input type="email"
                                    id="email"
                                    className="input"
                                    placeholder="name@example.com"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="phone" className="input-label">Phone</label>
                                <input type="text"
                                    id="phone"
                                    className="input"
                                    placeholder="(217) 555-0113"
                                    value={userPhone}
                                    onChange={(e) => setUserPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="user-personal-information__chapter user-profile-chapter">
                        <div className="user-personal-information__controls">
                            <button className="button button--outlined-red">Log out</button>
                            <button className="button button--outlined-gray">Discard changes</button>
                            <button className="button button--contained" onClick={onSaveChanges}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <Notification/>
        </>
    )
}

export default UserPersonalInformation;