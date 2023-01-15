import { Link } from "react-router-dom";
import CategoriesListItem from "../../../components/Categories/CategoriesListItem";
import RestaurantDeliveryInfo from "../../../components/RestaurantDeliveryInfo/RestaurantDeliveryInfo";
import IRestaurantsListItemProps from "../interfaces/IRestaurantsListItemProps";

const RestaurantsListItem = ({categories, restaurant}:IRestaurantsListItemProps) => {
    const {id, name, minDeliveryTime, maxDeliveryTime, minAmount, featured, image, categoriesId} = restaurant;

    const backgroundImageStyle = {
        'backgroundImage': 'url(' + image + ')',
    }

    return(
        <Link to={`/restaurant/${id}`} className="reustorants-list__item">
            <div className="reustorants-list__image" style={backgroundImageStyle}></div>
            <div className="reustorants-list__info">
                <div className="reustorants-list__title">
                    <h3 className="reustorants-list__name">
                        {name}
                    </h3>
                </div>

                <RestaurantDeliveryInfo
                    minDeliveryTime={minDeliveryTime}
                    maxDeliveryTime={maxDeliveryTime}
                    minAmount={minAmount}
                />

                <div className="reustorants-list__categories">
                    {categories.map((categoryItem) => {
                        return categoriesId.indexOf(categoryItem.id) >= 0
                            ? <CategoriesListItem {...categoryItem} key={categoryItem.id} />
                            : null;
                    })}
                </div>
            </div>

            {featured ? <span className="reustorants-list__label">Featured</span> : null}
        </Link>
    )
}

export default RestaurantsListItem;