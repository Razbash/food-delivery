import IProduct from '../../../interfaces/IProduct';

interface IProductInCart extends IProduct {
    count: number;
}

export default IProductInCart;