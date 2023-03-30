import ICart from '../../../interfaces/ICart';

interface ICartItemProps {
    id: number,
    image: string,
    linkToProduct: string,
    name: string,
    description: string,
    countUserCartItems: number,
    price: number,
    index: number,
    onHandlerRemoveProductFromCart: (index: number) => void,
    calculateCountProductsInCart: () => void,
    userCart: ICart[] | [],
}

export default ICartItemProps;