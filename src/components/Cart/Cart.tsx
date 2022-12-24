import { useEffect, useState } from 'react';
import IProduct from '../../interfaces/IProduct';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/actions/productsActions';
import { getCookie, removeFromCart } from '../../tools/cookie';
import ICart from '../../interfaces/ICart';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

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
        <>
            {userCart.length ?
                <div className="cart">
                    <h5 className="block-title">My cart</h5>

                    <div className="cart__wrapper">
                        <div className="cart__block-item">
                            <div className="cart__block-item-title">
                                <h6 className="cart__block-item-title-text">Menu</h6>
                                <span className="cart__block-item-title-counter">0 meals</span>
                            </div>
                            <div className="cart__list">
                                {products.map((product:IProduct) => {
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
                                })}
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
            : <CartIsEmpty/>}
        </>
    )
}

const CartIsEmpty = () => {
    return(
        <div className="cart-is-empty">
            <h3 className="cart-is-empty__title">The basket is empty</h3>
            <p className="cart-is-empty__text">Take a look at the main page to select products or find what you need in the search</p>
            <Link to="/" className="cart-is-empty__link button">Go to the main page</Link>
        </div>
    )
}

export default Cart;