import { Link } from 'react-router-dom';

import { PlusIcon } from '../../../../ui/icons';
import IProduct from '../../../../interfaces/IProduct';

import './restaurantMenuListItem.scss';

const RestaurantMenuListItem = ({id, name, description, price, images}: IProduct) => {
    const backgroundImageStyle = {
        'backgroundImage': 'url(' + images[0] + ')',
    };

    return(
        <Link to={`/products/${id}`} className="reustorant-menu-list-item">
            <div className="reustorant-menu-list-item__image" style={backgroundImageStyle}></div>
            <span className="reustorant-menu-list-item__name">
                {name}
            </span>
            <p className="reustorant-menu-list-item__description">
                {description}
            </p>
            <div className="reustorant-menu-list-item__control">
                <span className="reustorant-menu-list-item__price">
                    $ {price.toFixed(2)}
                </span>
                <span className="reustorant-menu-list-item__icon-wrapper">
                    <PlusIcon/>
                </span>
            </div>
        </Link>
    );
};

export default RestaurantMenuListItem;