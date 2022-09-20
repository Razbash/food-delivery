import PlusIcon from '../../assets/icons/PlusIcon';
import { Link } from 'react-router-dom';
import IReustorantMenu from '../../interfaces/IReustorantMenu';

interface IreustorantMenuProps {
    menu: IReustorantMenu[]
}

const ReustorantMenu = (props: IreustorantMenuProps) => {
    const {menu} = props;

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
                            <Link to={`/products/${id}`} className="reustorant-menu__name">
                                {name}
                            </Link>
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