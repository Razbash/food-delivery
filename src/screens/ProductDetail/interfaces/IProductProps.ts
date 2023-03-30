import IProduct from '../../../interfaces/IProduct';

interface IProductProps {
    product: IProduct,
    restaurantId: number,
    restaurantName: string,
    counter: number,
    onChangeCounter: (count: number) => void,
    addProductToCart: () => void,
}

export default IProductProps;