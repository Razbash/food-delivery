import './footerMenu.scss';

const FooterMenu = () => {
    const menu = [
        {title: 'Responses', elements: ['How it works', 'Guarantees', 'Security', 'Pricing']},
        {title: 'Company', elements: ['About us', 'Prices', 'Blog', 'License']},
        {title: 'Support', elements: ['Getting started', 'Help center', 'Report a bug', 'Contact us']},
    ];

    return(
        <div className="footer-menu">
            {menu.map((chapter, index) => {
                return(
                    <div className="footer-menu__column" key={index}>
                        <span className="footer-menu__item footer-menu__item--title">{chapter.title}</span>
                        {chapter.elements.map((link, index) => {
                            return(
                                <span className="footer-menu__item" key={index}>{link}</span>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default FooterMenu;