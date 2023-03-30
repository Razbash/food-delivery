import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Notification, NotificationTypes, startNotification } from '../../../components/Notification';
import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { fetchUser } from '../../../store/User/userActions';
import { Checkbox, Input } from '../../../ui/Form';
import { setCookie } from '../../../utils/cookie/cookie';
import { CompanyLogo, CompanyLogoColors } from '../../Layouts/components/CompanyLogo';
import EyeIcon from '../../../ui/icons/EyeIcon';

const AuthForm = () => {
    const [loginInput, setLoginInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [keppLogin, setKeepLogin] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {error, user} = useAppSelector(state => state.user);

    const onAuth = async(event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(fetchUser(loginInput));
    };

    useEffect(() => {
        const yearInMilliseconds = new Date(Date.now() + (86400e3 * 365)).toUTCString();

        if (user.password === passwordInput) {
            keppLogin
                ? setCookie('userId', user.id, yearInMilliseconds)
                : setCookie('userId', user.id);

            dispatch(startNotification({
                type: NotificationTypes.sucsses,
                text: 'Welcome!',
            }));

            navigate('/');
        } else if (user !== null) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: 'The username or password is entered incorrectly, or such an account does not exist.',
            }));
        }
    }, [user]);

    useEffect(() => {
        if (error) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `${error}`,
            }));
        }
    }, [error]);

    return(
        <div className="auth-form">
            <div className="auth-form__wrapper">
                <CompanyLogo color={CompanyLogoColors.black}/>

                <h1 className="auth-form__title">Login</h1>
                <p className="auth-form__subtitle">Sign in with your data that you entered during your registration.</p>

                <form action="#" className="auth-form__form" onSubmit={onAuth}>
                    <Input label="Email"
                        type="email"
                        id="email"
                        isRequired={true}
                        placeholder="name@example.com"
                        value={loginInput}
                        onChange={setLoginInput}
                    />

                    <Input label="Password"
                        type="password"
                        id="password"
                        isRequired={true}
                        placeholder="password"
                        value={passwordInput}
                        onChange={setPasswordInput}
                        icon={<EyeIcon/>}
                        autocomplete="on"
                    />

                    <Checkbox
                        id="keep-login"
                        label="Keep me logged in"
                        value={keppLogin}
                        setValue={setKeepLogin}
                    />

                    <button className="button button--contained"  type="submit">Login</button>
                </form>

                <span className="auth-form__sign-up">
                    Don’t have an account?&nbsp;

                    <Link to="/registration" className="auth-form__sign-up-link">
                        Sign up
                    </Link>
                </span>
            </div>

            <Notification/>
        </div>
    );
};

export default AuthForm;