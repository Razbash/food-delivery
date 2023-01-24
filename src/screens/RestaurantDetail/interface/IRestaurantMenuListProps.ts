import IProduct from "../../../interfaces/IProduct";

export default interface IRestaurantMenuListProps {
    products: IProduct[],
    loading: boolean,
}