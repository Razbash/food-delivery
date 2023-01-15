import { Link } from "react-router-dom";
import { PlusIcon } from "../../../ui/icons";
import IProduct from "../interface/IProduct";

const RestaurantMenuListItem = ({id, name, description, price, images}: IProduct) => {
    const backgroundImageStyle = {
        'backgroundImage': 'url(' + images[0] + ')',
    }

    return(
        <Link to={`/products/${id}`} className="reustorant-menu__item">
            <div className="reustorant-menu__image" style={backgroundImageStyle}></div>
            <span className="reustorant-menu__name">
                {name}
            </span>
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
        </Link>
    )
}

export default RestaurantMenuListItem;