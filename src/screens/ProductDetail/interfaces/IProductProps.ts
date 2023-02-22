import IProduct from "../../../interfaces/IProduct";

export default interface IProductProps {
    product: IProduct,
    restaurantId: number,
    restaurantName: string,
    counter: number,
    onChangeCounter: (count: number) => void,
    addProductToCart: () => void,
}