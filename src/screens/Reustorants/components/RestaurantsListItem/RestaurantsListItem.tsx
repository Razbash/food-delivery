import { Link } from 'react-router-dom';

import CategoriesListItem from '../../../../components/Categories/components/CategoriesListItem/CategoriesListItem';
import RestaurantDeliveryInfo from '../../../../components/RestaurantDeliveryInfo/RestaurantDeliveryInfo';
import IRestaurantsListItemProps from '../../interfaces/IRestaurantsListItemProps';

import './restaurantsListItem.scss';

const RestaurantsListItem = ({categories, restaurant}:IRestaurantsListItemProps) => {
    const {id, name, minDeliveryTime, maxDeliveryTime, minAmount, featured, image, categoriesId} = restaurant;

    const backgroundImageStyle = {
        'backgroundImage': 'url(' + image + ')',
    };

    return(
        <Link to={`/restaurant/${id}`} className="reustorants-list-item">
            <div className="reustorants-list-item__image" style={backgroundImageStyle}></div>
            <div className="reustorants-list-item__info">
                <div className="reustorants-list-item__title">
                    <h3 className="reustorants-list-item__name">
                        {name}
                    </h3>
                </div>

                <RestaurantDeliveryInfo
                    minDeliveryTime={minDeliveryTime}
                    maxDeliveryTime={maxDeliveryTime}
                    minAmount={minAmount}
                />

                <div className="reustorants-list-item__categories">
                    {categories.map((categoryItem) => {
                        return categoriesId.indexOf(categoryItem.id) >= 0
                            ? <CategoriesListItem {...categoryItem} key={categoryItem.id} size={'small'}/>
                            : null;
                    })}
                </div>
            </div>

            {featured ? <span className="reustorants-list-item__label">Featured</span> : null}
        </Link>
    );
};

export default RestaurantsListItem;