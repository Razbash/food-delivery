import { Link } from "react-router-dom";
import ICompanyLogo from "./interface/ICompanyLogo";

import "./companyLogo.scss";

const CompanyLogo = ({color}: ICompanyLogo) => {
    const logoMeta = "logo__primary logo__primary--" + color;

    return(
        <Link to="/" className="logo">
            <span className={logoMeta}>Food</span>
            <span className="logo__secondary">Delivery</span>
        </Link>
    )
}

export default CompanyLogo;