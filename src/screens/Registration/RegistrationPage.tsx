import { CompanyLogo, CompanyLogoColors } from '../Layouts/components/CompanyLogo';

import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import './registration.scss';

const RegistrationPage = () => {
    return(
        <div className="registration">
            <div className="registration__demo">
                <CompanyLogo color={CompanyLogoColors.light}/>

                <h3 className="registration__description">A few steps to create your restaurant or personal account</h3>
                <p className="registration__text">Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae.</p>
                <img src="../../assets/images/auth/registration.png"
                    alt="Registration"
                    className="registration__image"
                    width={878}
                />
            </div>
            <div className="registration__details">
                <h1 className="registration__title">Personal details</h1>
                <span className="registration__subtitle">Enter your data that you will use for entering.</span>

                <RegistrationForm/>
            </div>
        </div>
    );
};

export default RegistrationPage;