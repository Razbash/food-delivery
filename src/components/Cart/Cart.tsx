import { useEffect, useState } from 'react';
import IProduct from '../../interfaces/IProduct';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/actions/productsActions';
import { getCookie, removeFromCart } from '../../tools/cookie';
import ICart from '../../interfaces/ICart';
import CartItem from './CartItem';

const Cart = () => {
    const [userCart, setUserCart] = useState<ICart[] | []>([]);
    const dispatch = useAppDispatch();
    const {products} = useAppSelector(state => state.products)

    useEffect(() => {
        setUserCart(getCookie('cart'));
        dispatch(fetchProducts());
    },[]);

    const onHandlerRemoveProductFromCart = (index :number) => {
        removeFromCart(index);
        setUserCart(getCookie('cart'));
    }

    return(
        <div className="cart">
            <div className="cart__wrapper">
                <div className="cart__block-item">
                    <div className="cart__block-item-title">
                        <h6 className="cart__block-item-title-text">Menu</h6>
                        <span className="cart__block-item-title-counter">0 meals</span>
                    </div>
                    <div className="cart__list">
                        {userCart ?
                            products.map((product:IProduct) => {
                                return(
                                    userCart.map((userCartItem:ICart, index:number) => {
                                        if (product.id === userCartItem.productId) {
                                            const {id, name, description, price, image} = product;
                                            const linkToProduct = `/products/${product.id}`;

                                            return(
                                                <CartItem
                                                    id={id}
                                                    image={image}
                                                    linkToProduct={linkToProduct}
                                                    name={name}
                                                    description={description}
                                                    countUserCartItems={userCartItem.count}
                                                    price={price}
                                                    index={index}
                                                    onHandlerRemoveProductFromCart={onHandlerRemoveProductFromCart}
                                                    key={id}
                                                />
                                            )
                                        }
                                    })
                                )
                            })
                        : null}
                    </div>
                </div>
                <div className="cart__block-item">
                    <div className="cart__block-item-title">
                        <h6 className="cart__block-item-title-text">Select your shipping address</h6>
                    </div>
                </div>
            </div>
            <div className="cart__additional-info">

            </div>
        </div>
    )
}

export default Cart;