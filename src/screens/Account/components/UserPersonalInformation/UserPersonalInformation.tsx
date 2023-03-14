import { useState, useEffect } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store/redux";
import { sendUser } from "../../../../store/User/userActions";
import { Input } from "../../../../ui/Form";
import { setCookie } from "../../../../utils/cookie/cookie";
import EnumSendUserTypes from "../../interfaces/EnumSendUserTypes";
import IUserPersonalInformationProps from "../../interfaces/IUserPersonalInformationProps";
import './userPersonalInformation.scss';

const UserPersonalInformation = ({userData}: IUserPersonalInformationProps) => {
    const {id, image, firstName, lastName, email, phone, password} = userData;
    const [userImage, setUserImage] = useState([]);
    const [userFirstName, setUserFirstName] = useState<string>(firstName);
    const [userLastName, setUserLastName]   = useState<string>(lastName);
    const [userEmail, setUserEmail]         = useState<string>(email);
    const [userPhone, setUserPhone] = useState<string>(phone ? phone : '');

    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    let activeImage = "";

    const onChangeImage = (newImage: ImageListType) => {
        setUserImage(newImage as never[]);
    }

    const onSaveChanges = () => {
        const newUserData = {
            id: id,
            image: image,
            password: password,
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            phone: userPhone,
        }

        if (userImage.length) {
            newUserData.image = userImage[0]['data_url'];
        }

        dispatch(sendUser(newUserData, EnumSendUserTypes.UPDATE));
    }

    const logOut = () => {
        setCookie('userId', '');
        navigate('/auth');
    }

    return(
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
                                <div style={{"display": "none"}}>
                                    {activeImage = imageList.length ? imageList[0].data_url : image}
                                </div>

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
                        <Input
                            id="first_name"
                            label="First name"
                            placeholder="Jane"
                            value={userFirstName}
                            onChange={setUserFirstName}
                        />
                        <Input
                            id="last_name"
                            label="Last name"
                            placeholder="Robetson"
                            value={userLastName}
                            onChange={setUserLastName}
                        />
                        <Input
                            id="email"
                            type="email"
                            label="Email"
                            placeholder="name@example.com"
                            value={userEmail}
                            onChange={setUserEmail}
                        />
                        <Input
                            id="phone"
                            label="Phone"
                            placeholder="(217) 555-0113"
                            value={userPhone}
                            onChange={setUserPhone}
                        />
                    </div>
                </div>

                <div className="user-personal-information__chapter user-profile-chapter">
                    <div className="user-personal-information__controls">
                        <button className="button button--outlined-red" onClick={logOut}>Log out</button>
                        <button className="button button--outlined-gray">Discard changes</button>
                        <button className="button button--contained" onClick={onSaveChanges}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPersonalInformation;