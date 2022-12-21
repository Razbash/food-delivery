import { useEffect, useState } from "react";
import EyeIcon from "../../assets/icons/EyeIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUsers } from "../../store/actions/usersActions";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import IUser from "../../interfaces/IUser";
import { setUserId } from "../../tools/cookie";

const AuthForm = () => {
    const dispatch = useAppDispatch();
    const {error, loading, users} = useAppSelector(state => state.users);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const authHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO прокачай валидацию и авторизацию
        users.forEach((element: IUser )=> {
            if (login === element.email && password === element.password) {
                setUserId(String(element.id));
                navigate('/user');
            } else {
                alert('Неверный логин или пароль');
            }
        })
    }

    return(
        <div className="auth-form">
            <div className="auth-form__wrapper">
                <Logo color="default"/>

                <h1 className="auth-form__title">Login</h1>
                <p className="auth-form__subtitle">Sign in with your data that you entered during your registration.</p>
                <form action="#" className="auth-form__form" onSubmit={authHandler}>
                    <div className="input-wrapper">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="email"
                            id="email"
                            className="input"
                            required
                            placeholder="name@example.com"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password" className="input-label">Password</label>
                        <div className="input-with-icon">
                            <input type="password"
                                id="password"
                                className="input"
                                placeholder="min. 8 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <EyeIcon/>
                        </div>
                    </div>
                    <label className="checkbox">
                        <input type="checkbox" id="keep-login" className="checkbox__input"/>
                        <span className="checkbox__label">Keep me logged in</span>
                    </label>

                    <button className="button button--contained"  type="submit">Login</button>
                </form>

                <a href="#" className="auth-form__forgot-password">Forgot password</a>
                <span className="auth-form__sign-up">
                    Don’t have an account?

                    <Link to="/regitration" className="auth-form__sign-up-link">
                        Sign up
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default AuthForm;