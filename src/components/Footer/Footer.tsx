import Logo from "../Logo/Logo";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__wrapper container">
                <div className="footer__left">
                    <Logo color="white"/>

                    <div className="social-network">
                        <div className="social-network__item">
                            <FacebookIcon/>
                        </div>
                        <div className="social-network__item">
                            <TwitterIcon/>
                        </div>
                        <div className="social-network__item">
                            <InstagramIcon/>
                        </div>
                        <div className="social-network__item">
                            <YoutubeIcon/>
                        </div>
                        <div className="social-network__item">
                            <LinkedinIcon/>
                        </div>
                    </div>

                    <span className="footer__copyright">&copy; Личный проект Дмитрия Беззубова</span>
                </div>
                <div className="footer__right">
                    <div className="footer__column">
                        <span className="footer__menu-item footer__menu-item--title">Responses</span>
                        <span className="footer__menu-item">How it works</span>
                        <span className="footer__menu-item">Guarantees</span>
                        <span className="footer__menu-item">Security</span>
                        <span className="footer__menu-item">Pricing</span>
                    </div>
                    <div className="footer__column">
                        <span className="footer__menu-item footer__menu-item--title">Company</span>
                        <span className="footer__menu-item">About us</span>
                        <span className="footer__menu-item">Prices</span>
                        <span className="footer__menu-item">Blog</span>
                        <span className="footer__menu-item">License</span>
                    </div>
                    <div className="footer__column">
                        <span className="footer__menu-item footer__menu-item--title">Support</span>
                        <span className="footer__menu-item">Getting started</span>
                        <span className="footer__menu-item">Help center</span>
                        <span className="footer__menu-item">Report a bug</span>
                        <span className="footer__menu-item">Contact us</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;