import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";

interface IHeader {
    type: string;
}

const Header = (props: IHeader) => {
    return(
        <div className="header">
            <div className="container header__wrapper">
                <div className="header__left">
                    <Logo color={"black"}/>

                    {props.type === "user" ? <Search/> : null}
                </div>
                <div className="header__right">
                    <Menu type={props.type}/>
                </div>
            </div>
        </div>
    )
}

export default Header;