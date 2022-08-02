import EyeIcon from "../../assets/icons/EyeIcon";
import Logo from "../Logo/Logo";

const AuthForm = () => {
    return(
        <div className="auth-form">
            <div className="auth-form__wrapper">
                <Logo color="default"/>

                <h1 className="auth-form__title">Login</h1>
                <p className="auth-form__subtitle">Sign in with your data that you entered during your registration.</p>
                <form action="#" className="auth-form__form">
                    <div className="input-wrapper">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="email"
                            id="email"
                            className="input"
                            required
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password" className="input-label">Password</label>
                        <div className="input-with-icon">
                            <input type="password"
                                id="password"
                                className="input"
                                placeholder="min. 8 characters"
                                required
                            />

                            <EyeIcon/>
                        </div>
                    </div>
                    <label className="checkbox">
                        <input type="checkbox" id="keep-login" className="checkbox__input"/>
                        <span className="checkbox__label">Keep me logged in</span>
                    </label>

                    <button className="button button--contained">Login</button>
                </form>

                <a href="#" className="auth-form__forgot-password">Forgot password</a>
                <span className="auth-form__sign-up">Don’t have an account? <a href="#" className="auth-form__sign-up-link">Sign up</a></span>
            </div>
        </div>
    )
}

export default AuthForm;