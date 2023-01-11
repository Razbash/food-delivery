import ICategory from "../../../components/Categories/interfaces/ICategory";
import IRestaurant from "./IRestaurant";

export default interface IRestaurantsListItemProps {
    categories: ICategory[],
    restaurant: IRestaurant
}