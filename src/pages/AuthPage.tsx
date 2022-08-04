import AuthForm from "../components/AuthForm/AuthForm";
import AuthImage1 from "../assets/images/backgrounds/auth-page-image.png";
import AuthImage2 from "../assets/images/backgrounds/auth-page-image-2.png";
import AuthImage3 from "../assets/images/backgrounds/auth-page-image-3.png";
import { Link } from "react-router-dom";

const AuthPage = () => {
    return(
        <div className="auth">
            <div className="auth__login">
                <AuthForm/>
            </div>
            <div className="auth__background">
                <div className="auth__gallery">
                    <img src={AuthImage1}
                        alt="Auth image"
                        className="auth__image auth__image--primary"
                    />
                    <img src={AuthImage2}
                        alt="Auth image"
                        className="auth__image auth__image--secondary"
                    />
                    <img src={AuthImage3}
                        alt="Auth image"
                        className="auth__image auth__image--thirty"
                        width={300}
                    />

                    <div className="auth__info">
                        <h3 className="auth__title">Leave reviews for all meals</h3>
                        <p className="auth__text">Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
                        <Link to="/admin">Временный переход в админку</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;