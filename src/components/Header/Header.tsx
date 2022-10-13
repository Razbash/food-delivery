import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import CrossIcon from "../../assets/icons/CrossIcon";
import { useState } from "react";

interface IHeader {
    type: string
}

const Header = (props: IHeader) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    const openMobileMenu = () => {
        setIsOpenMobileMenu(true);
    }

    const closeMobileMenu = () => {
        setIsOpenMobileMenu(false);
    }

    return(
        <>
            <div className="header">
                <div className="container header__wrapper">
                    <Logo color={"black"}/>
                    {props.type === "user" ? <Search/> : null}
                    <Menu type={props.type}/>

                    <div className="header__icon-wrapper" onClick={openMobileMenu}>
                        <HamburgerIcon/>
                    </div>
                </div>
            </div>

            {isOpenMobileMenu ?
                <div className="header header--mobile">
                    <div className="container header__wrapper">
                        <div className="header__title">
                            <Logo color={"black"}/>

                            <div className="header__icon-wrapper" onClick={closeMobileMenu}>
                                <CrossIcon/>
                            </div>
                        </div>
                        <Menu type={props.type}/>
                        {props.type === "user" ? <Search/> : null}
                    </div>
                </div>
             : null}
        </>
    )
}

export default Header;