const FooterMenu = () => {
    const menu = [
        {title: "Responses", elements: ["How it works", "Guarantees", "Security", "Pricing"]},
        {title: "Company", elements: ["About us", "Prices", "Blog", "License"]},
        {title: "Support", elements: ["Getting started", "Help center", "Report a bug", "Contact us"]}
    ]

    return(
        <div className="footer__right">
            {menu.map(chapter => {
                return(
                    <div className="footer__column">
                        <span className="footer__menu-item footer__menu-item--title">{chapter.title}</span>
                        {chapter.elements.map(link => {
                            return(
                                <span className="footer__menu-item">{link}</span>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default FooterMenu;