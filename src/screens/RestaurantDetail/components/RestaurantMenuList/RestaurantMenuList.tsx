import IRestaurantMenuListProps from '../../interface/IRestaurantMenuListProps';
import { RestaurantMenuListSkeleton, RestaurantMenuListItem } from '../../index';
import './restaurantMenuList.scss';

const RestaurantMenuList = ({products, loading}: IRestaurantMenuListProps) => {
    return(
        <div className="reustorant-menu">
            <h5 className="reustorant-menu__label">Menu</h5>

            <div className="reustorant-menu__wrapper">
                {loading ? <RestaurantMenuListSkeleton/> : null}
                {products ? products.map(product => {
                    return <RestaurantMenuListItem key={product.id} {...product} />;
                }): null}
            </div>
        </div>
    );
};

export default RestaurantMenuList;