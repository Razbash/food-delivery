import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/redux";
import { sendUser } from "../../../store/User/userActions";
import { Input } from "../../../ui/Form";
import { Notification, NotificationTypes, startNotification } from "../../../components/Notification";
import { setCookie } from "../../../utils/cookie/cookie";
import axios from "../../../utils/axios";


const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const {error} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (error) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `An error occurred when creating a new user. ${error}`
            }));
        }

        // eslint-disable-next-line
    }, [error]);

    const onUserRegistration = async(event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const generateUserId = Math.floor(Math.random() * 999999);
        const findedUserByEmail = await axios.get(`users?email=${email}`);

        if (findedUserByEmail.data && findedUserByEmail.data.length) {
            dispatch(startNotification({
                type: NotificationTypes.warning,
                text: `A user with this email already exists`
            }));

            return;
        }

        if (password === confirmPassword) {
            const newUser = {
                id: generateUserId,
                firstName: '',
                lastName: '',
                email: email,
                password: password,
            }

            dispatch(sendUser(newUser));

            dispatch(startNotification({
                type: NotificationTypes.sucsses,
                text: `The profile has been created successfully. Tell us more about yourself`
            }));

            setCookie('userId', String(generateUserId));
            navigate('/account');
        } else {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `Passwords don't match`
            }));
        }
    }

    return(
        <form className="registration-form" onSubmit={onUserRegistration}>
            <div className="registration-form__fields">
                <Input label="Email"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    isRequired={true}
                    value={email}
                    onChange={setEmail}
                />
                <Input label="Password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    isRequired={true}
                    value={password}
                    onChange={setPassword}
                />
                <Input label="Confirm password"
                    id="confirm_password"
                    type="password"
                    placeholder="Confirm password"
                    isRequired={true}
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                />
            </div>
            <div className="registration-form__buttons">
                <button className="button button--contained">Continue</button>
                <Link to="/auth" className="registration-form__back-button">Back</Link>
            </div>

            <Notification/>
        </form>
    )
}

export default RegistrationForm;