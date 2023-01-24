import { Link } from "react-router-dom";
import { ArrowIcon } from "../../ui/icons";
import INavigation from "./interfaces/INavigation";

import './navigation.scss';

const Navigation = ({link, text}: INavigation) => {
    return(
        <Link to={link} className="navigation">
            <ArrowIcon/>
            <span className="navigation__text">{text}</span>
        </Link>
    )
}

export default Navigation;