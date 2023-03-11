import IRestaurant from "../../../interfaces/IRestaurant";

export default interface IRestaurantsListProps {
    showCounter?: boolean,
    list?: IRestaurant[],
}