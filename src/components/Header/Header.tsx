import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";

const Header = () => {
    return(
        <div className="header">
            <div className="container header__wrapper">
                <div className="header__left">
                    <Logo color={"black"}/>
                    <Search/>
                </div>
                <div className="header__right">
                    <Menu/>
                </div>
            </div>
        </div>
    )
}

export default Header;