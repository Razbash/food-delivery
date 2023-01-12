import { CompanyLogo, CompanyLogoColors } from "../CompanyLogo";
import FooterMenu from "./FooterMenu";
import SocialLinks from "./SocialLinks";

import "./footer.scss";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__wrapper container">
                <div className="footer__left">
                    <CompanyLogo color={CompanyLogoColors.white}/>
                    <SocialLinks/>

                    <span className="footer__copyright">
                        &copy; Личный проект Дмитрия Беззубова
                    </span>
                </div>

                <FooterMenu/>

                <span className="footer__copyright footer__copyright--mobile">
                    &copy; Личный проект Дмитрия Беззубова
                </span>
            </div>
        </div>
    )
}

export default Footer;