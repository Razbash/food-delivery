import AuthForm from "./components/AuthForm";
import './auth.scss';

const AuthPage = () => {
    return(
        <div className="auth">
            <div className="auth__login">
                <AuthForm/>
            </div>
            <div className="auth__background">
                <div className="auth__gallery">
                    <img src="../../assets/images/auth/auth-page-image.png"
                        alt="Auth"
                        className="auth__image auth__image--primary"
                    />
                    <img src="../../assets/images/auth/auth-page-image-2.png"
                        alt="Auth"
                        className="auth__image auth__image--secondary"
                    />
                    <img src="../../assets/images/auth/auth-page-image-3.png"
                        alt="Auth"
                        className="auth__image auth__image--thirty"
                        width={300}
                    />

                    <div className="auth__info">
                        <h3 className="auth__title">Leave reviews for all meals</h3>
                        <p className="auth__text">Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;