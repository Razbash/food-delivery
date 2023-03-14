import ICategory from '../../../components/Categories/interfaces/ICategory';
import IRestaurant from '../../../interfaces/IRestaurant';

interface IRestaurantsListItemProps {
    categories: ICategory[],
    restaurant: IRestaurant
}

export default IRestaurantsListItemProps;