interface ILogo {
    color: string;
}

const Logo = ({color}: ILogo) => {
    const logoMeta = "logo__primary " + "logo__primary--" + color;

    return(
        <div className="logo">
            <span className={logoMeta}>Food</span>
            <span className="logo__secondary">Delivery</span>
        </div>
    )
}

export default Logo;