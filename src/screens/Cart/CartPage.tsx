import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/redux';
import { getCookie } from '../../utils/cookie/cookie';
import { fetchProducts } from '../../store/Products/productsActions';
import { countNumberProductsInCart, removeFromCart } from '../../utils/cart/cart';

import ICart from '../../interfaces/ICart';
import IProduct from '../../interfaces/IProduct';

import LayoutPage from '../Layouts/LayoutPage';
import BlockTitle from '../../components/BlockTitle/BlockTitle';

import IProductInCart from './interfaces/IProductInCart';
import CartItemsSkeleton from './components/CartItemSkeleton/CartItemsSkeleton';
import CartItem from './components/CartItem/CartItem';
import CartIsEmpty from './components/CartIsEmpty/CartIsEmpty';

import './cart.scss';

const CartPage = () => {
    const [userCart, setUserCart] = useState<ICart[] | []>([]);
    const [cartList, setCartList] = useState<IProductInCart[] | []>([]);
    const [countProductsInCart, setCountProductsInCart] = useState<number>(0);

    const dispatch = useAppDispatch();
    const {productsLoading, products} = useAppSelector(state => state.products);

    useEffect(() => {
        setUserCart(getCookie('cart'));
        dispatch(fetchProducts());

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const userCartList: IProductInCart[] = [];

        if (!products || !userCart) {
            return;
        }

        products.forEach((product:IProduct) => {
            userCart.forEach((userCartItem:ICart, index: number) => {
                if (product.id === userCartItem.productId) {
                    userCartList[index] = {...product, count: userCartItem.count};
                }
            });
        });

        setCartList(userCartList);
        calculateCountProductsInCart();
    }, [products, userCart]);

    const calculateCountProductsInCart = () => {
        setCountProductsInCart(countNumberProductsInCart());
    };

    const onHandlerRemoveProductFromCart = (index :number) => {
        removeFromCart(index);
        setUserCart(getCookie('cart'));
    };

    return(
        <LayoutPage>
            {userCart && userCart.length ?
                <div className="cart">
                    <BlockTitle text="My cart"/>

                    <div className="cart__wrapper">
                        <div className="cart__block-item">
                            <div className="cart__block-item-title">
                                <h6 className="cart__block-item-title-text">Menu</h6>
                                <span className="cart__block-item-title-counter">{countProductsInCart} meals</span>
                            </div>
                            <div className="cart__list">
                                {productsLoading ? <CartItemsSkeleton/> : null}
                                {cartList.map((product:IProductInCart, index: number) => {
                                    const linkToProduct = `/products/${product.id}`;

                                    return(
                                        <CartItem
                                            key={product.id}
                                            linkToProduct={linkToProduct}
                                            index={index}
                                            onHandlerRemoveProductFromCart={onHandlerRemoveProductFromCart}
                                            calculateCountProductsInCart={calculateCountProductsInCart}
                                            userCart={userCart}
                                            id={product.id}
                                            image={product.images[0]}
                                            name={product.name}
                                            description={product.description}
                                            countUserCartItems={product.count}
                                            price={product.price}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                : <CartIsEmpty/>}
        </LayoutPage>
    );
};

export default CartPage;