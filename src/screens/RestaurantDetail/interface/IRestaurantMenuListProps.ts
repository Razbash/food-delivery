import IProduct from "./IProduct";

export default interface IRestaurantMenuListProps {
    products: IProduct[],
    loading: boolean,
}