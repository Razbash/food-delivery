import IProduct from "../../../interfaces/IProduct";

export default interface IProductInCart extends IProduct {
    count: number;
}