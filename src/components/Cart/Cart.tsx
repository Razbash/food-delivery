import { useEffect, useState } from 'react';
import IProduct from '../../interfaces/IProduct';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/actions/productsActions';
import { getCookie, removeFromCart } from '../../tools/cookie';
import ICart from '../../interfaces/ICart';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../store/actions/userActions';
import UserAddresses from '../UserAddresses/UserAddresses';

interface IProductInCart extends IProduct {
    count: number;
}

const Cart = () => {
    const [userCart, setUserCart] = useState<ICart[] | []>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [cartList, setCartList] = useState<IProductInCart[] | []>([]);
    const dispatch = useAppDispatch();
    const {loading, products} = useAppSelector(state => state.products);
    const {user} = useAppSelector(state => state.user);

    useEffect(() => {
        const userId = getCookie('userId');
        setUserCart(getCookie('cart'));
        dispatch(fetchProducts());

        if (userId) {
            dispatch(fetchUser({id: Number(userId)}));
        }
    }, []);

    useEffect(() => {
        const userCartList: IProductInCart[] = [];
        let initTotalPrice: number = 0;

        products.forEach((product:IProduct) => {
            userCart.forEach((userCartItem:ICart, index: number) => {
                if (product.id === userCartItem.productId) {
                    userCartList[index] = {...product, count: userCartItem.count};
                    initTotalPrice += userCartItem.count * product.price;
                }
           });
       });

       setCartList(userCartList);
       setTotalPrice(initTotalPrice);
    }, [products, userCart]);

    const onHandlerRemoveProductFromCart = (index :number) => {
        removeFromCart(index);
        setUserCart(getCookie('cart'));
    }

    const onChangeTotalPrice = (value: number) => {
        setTotalPrice(value);
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
                                {loading ? <CartLazyLoader/> : null}
                                {cartList.map((product:IProductInCart, index: number) => {
                                    const {id, name, description, price, image, count} = product;
                                    const linkToProduct = `/products/${product.id}`;
                                        return(
                                            <CartItem
                                                id={id}
                                                image={image}
                                                linkToProduct={linkToProduct}
                                                name={name}
                                                description={description}
                                                countUserCartItems={count}
                                                price={price}
                                                index={index}
                                                onHandlerRemoveProductFromCart={onHandlerRemoveProductFromCart}
                                                onChangeTotalPrice={onChangeTotalPrice}
                                                totalPrice={totalPrice}
                                                key={id}
                                                userCart={userCart}
                                            />
                                        )
                                })}
                            </div>
                        </div>

                        <div className="cart__controls">
                            {user.shippingAddresses ?
                                <div className="cart__block-item cart-shipping-address">
                                    <h6 className="cart__block-item-title-text">Select your shipping address</h6>
                                    <UserAddresses userData={user} showOnlyAddresses={true}/>
                                    <Link to="/user" className="button button--contained-light-blue cart-shipping-address__button">Add new shipping address</Link>
                                </div>
                            : null}

                            <div className="cart__block-item cart-payment-summary">
                                <h6 className="cart__block-item-title-text">Payment summary</h6>
                                <div className="cart-payment-summary__features">
                                    <div className="cart-payment-summary__features-item">
                                        <span className="cart-payment-summary__features-item-label">Subtotal</span>
                                        <span className="cart-payment-summary__features-item-value">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="cart-payment-summary__features-item cart-payment-summary__features-item--strong">
                                        <span className="cart-payment-summary__features-item-label">Total (tax incl.)</span>
                                        <span className="cart-payment-summary__features-item-value">${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="cart-payment-summary__submit button button--contained">Proceed to checkout</button>
                            </div>
                        </div>
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

const CartLazyLoader = () => {
    return(
        <>
            <div className="cart__list-item cart__list-item--loading"></div>
            <div className="cart__list-item cart__list-item--loading"></div>
            <div className="cart__list-item cart__list-item--loading"></div>
        </>
    )
}

export default Cart;