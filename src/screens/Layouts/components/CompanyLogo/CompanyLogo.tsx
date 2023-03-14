import { Link } from 'react-router-dom';

import ICompanyLogo from './interface/ICompanyLogo';

import './companyLogo.scss';

const CompanyLogo = ({color}: ICompanyLogo) => {
    const primaryLogogMeta = 'logo__primary logo__primary--' + color;
    const secondaryLogoMeta = 'logo__secondary logo__secondary--' + color;

    return(
        <Link to="/" className="logo">
            <span className={primaryLogogMeta}>Food</span>
            <span className={secondaryLogoMeta}>Delivery</span>
        </Link>
    );
};

export default CompanyLogo;