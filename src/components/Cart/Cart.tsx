import { useEffect, useState } from 'react';
import IProduct from '../../interfaces/IProduct';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/actions/productsActions';
import { countNumberProductsInCart, getCookie, removeFromCart, setOrderData } from '../../tools/cookie';
import ICart from '../../interfaces/ICart';
import CartItem from './CartItem';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { fetchUser } from '../../store/actions/userActions';
import UserAddresses from '../UserAddresses/UserAddresses';
import { IShippingAddress, IShippingAddressWithId } from '../../interfaces/IShippingAddresses';
import { startNotification } from '../../store/actions/notificationActions';
import NotificationTypes from "../../enums/NotificationTypes";
import Notification from '../Notification/Notification';
import Summary from '../Summary/Summary';

interface IProductInCart extends IProduct {
    count: number;
}

const Cart = () => {
    const [userCart, setUserCart] = useState<ICart[] | []>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [cartList, setCartList] = useState<IProductInCart[] | []>([]);
    const [countProductsInCart, setCountProductsInCart] = useState<number>(0);
    const [selectedAddress, setSelectedAddress] = useState<IShippingAddressWithId>();

    const dispatch = useAppDispatch();
    const {loading, products} = useAppSelector(state => state.products);
    const {user} = useAppSelector(state => state.user);
    const userId = getCookie('userId');
    let navigate = useNavigate();

    useEffect(() => {
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
       calculateCountProductsInCart();
    }, [products, userCart]);

    const calculateCountProductsInCart = () => {
        setCountProductsInCart(countNumberProductsInCart());
    }

    const onHandlerRemoveProductFromCart = (index :number) => {
        removeFromCart(index);
        setUserCart(getCookie('cart'));
    }

    const onChangeTotalPrice = (value: number) => {
        setTotalPrice(value);
    }

    const choseShippingAddress = (address:IShippingAddressWithId) => {
        setSelectedAddress(address);
    }

    const saveOrderData = () => {
        if (!userId) {
            dispatch(startNotification({type: NotificationTypes.warning, text: "To place an order, you need to log in"}));
            navigate('/auth');
        }

        if (selectedAddress) {
            const orderData = {
                address: selectedAddress,
                products: cartList,
                totalAmount: totalPrice,
            }

            setOrderData(orderData);
            navigate('/checkout');
        } else {
            dispatch(startNotification({type: NotificationTypes.warning, text: "To place an order, select your address"}));
        }
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
                                <span className="cart__block-item-title-counter">{countProductsInCart} meals</span>
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
                                            calculateCountProductsInCart={calculateCountProductsInCart}
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
                                    <UserAddresses
                                        userData={user}
                                        showOnlyAddresses={true}
                                        choseShippingAddress={choseShippingAddress}
                                        selectedAddress={selectedAddress}
                                    />
                                    <Link to="/user" className="button button--contained-light-blue cart-shipping-address__button">Add new shipping address</Link>
                                </div>
                            : null}

                            <Summary totalPrice={totalPrice}
                                buttonText="Proceed to checkout"
                                onSubmit={saveOrderData}
                            />
                        </div>
                    </div>
                </div>
            : <CartIsEmpty/>}
            <Notification/>
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