import { useState } from 'react';

import { CrossIcon, HamburgerIcon } from '../../../../ui/icons';
import { CompanyLogo, CompanyLogoColors } from '../CompanyLogo';

import Menu from './Menu';
import Search from './Search';

import './header.scss';

const Header = () => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    const openMobileMenu = () => {
        setIsOpenMobileMenu(true);
    };

    const closeMobileMenu = () => {
        setIsOpenMobileMenu(false);
    };

    return(
        <>
            <div className="header">
                <div className="container header__wrapper">
                    <CompanyLogo color={CompanyLogoColors.black}/>
                    <Search/>
                    <Menu/>

                    <div className="header__icon-wrapper" onClick={openMobileMenu}>
                        <HamburgerIcon/>
                    </div>
                </div>
            </div>

            {isOpenMobileMenu ?
                <div className="header header--mobile">
                    <div className="container header__wrapper">
                        <div className="header__title">
                            <CompanyLogo color={CompanyLogoColors.black}/>

                            <div className="header__icon-wrapper" onClick={closeMobileMenu}>
                                <CrossIcon/>
                            </div>
                        </div>
                        <Menu/>
                        <Search/>
                    </div>
                </div>
                : null}
        </>
    );
};

export default Header;