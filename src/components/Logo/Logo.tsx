import { Link } from "react-router-dom";

interface ILogo {
    color: string;
}

const Logo = ({color}: ILogo) => {
    const logoMeta = "logo__primary " + "logo__primary--" + color;

    return(
        <Link to="/" className="logo">
            <span className={logoMeta}>Крыска</span>
            <span className="logo__secondary">Delivery</span>
        </Link>
    )
}

export default Logo;