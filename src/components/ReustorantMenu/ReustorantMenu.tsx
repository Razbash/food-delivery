import nigiriSetImage from '../../assets/images/menu/nigiriSet.png';
import rollSetImage from '../../assets/images/menu/rollSet.png';
import PlusIcon from '../../assets/icons/PlusIcon';

import IReustorantMenu from '../../interfaces/IReustorantMenu';

const ReustorantMenu = () => {
    const menu:Array<IReustorantMenu> = [
        {
            id: 0,
            name: "Nigiri set",
            description: "Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.",
            price: 16.80,
            image: nigiriSetImage
        },
        {
            id: 1,
            name: "Roll set",
            description: "Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.",
            price: 22.56,
            image: rollSetImage
        },
        {
            id: 2,
            name: "Star set",
            description: "Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.",
            price: 50.56,
            image: nigiriSetImage
        },
        {
            id: 3,
            name: "Razbash set",
            description: "Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.",
            price: 55.00,
            image: rollSetImage
        }
    ];

    return(
        <div className="reustorant-menu">
            <h5 className="reustorant-menu__label">Menu</h5>

            <div className="reustorant-menu__wrapper">
                {menu.map(element => {
                    const {id, name, description, price, image} = element;
                    const backgroundImageStyle = {
                        'background': 'url(' + image + ')',
                        'backgroundSize': 'cover',
                        'backgroundPosition': 'center'
                    }

                    return(
                        <div className="reustorant-menu__item" key={id}>
                            <div className="reustorant-menu__image" style={backgroundImageStyle}></div>
                            <h6 className="reustorant-menu__name">
                                {name}
                            </h6>
                            <p className="reustorant-menu__description">
                                {description}
                            </p>
                            <div className="reustorant-menu__control">
                                <span className="reustorant-menu__price">
                                    $ {price.toFixed(2)}
                                </span>
                                <span className="reustorant-menu__icon-wrapper">
                                    <PlusIcon/>
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ReustorantMenu;