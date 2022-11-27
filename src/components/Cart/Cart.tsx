import { useEffect, useState } from 'react';
import TrashIcon from '../../assets/icons/TrashIcon';
import IProduct from '../../interfaces/IProduct';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/actions/productsActions';
import { getCookie } from '../../tools/cookie';

interface ICart {
    productId: number,
    count: number,
}

const Cart = () => {
    const [userCart, setUserCart] = useState<ICart[] | []>([]);
    const [productList, setProductList] = useState([]);
    const dispatch = useAppDispatch();
    const {products} = useAppSelector(state => state.products)

    useEffect(() => {
        setUserCart(getCookie('cart'));
        dispatch(fetchProducts());
    },[]);

    return(
        <div className="cart">
            <div className="cart__wrapper">
                <div className="cart__block-item">
                    <div className="cart__block-item-title">
                        <h6 className="cart__block-item-title-text">Menu</h6>
                        <span className="cart__block-item-title-counter">0 meals</span>
                    </div>
                    <div className="cart__list">
                        {products.map((product:IProduct) => {
                            return(
                                userCart.map((userCartItem:ICart) => {
                                    if (product.id === userCartItem.productId) {
                                        const {id, name, description, price, image} = product;

                                        return(
                                            <div className="cart__list-item" key={id}>
                                                <div style={{"backgroundImage": 'url(' + image + ')'}}
                                                    className="cart__item-image"
                                                ></div>

                                                <div className="cart__item-product-info">
                                                    <span className="cart__item-name">{name}</span>
                                                    <p className="cart__item-description">{description}</p>
                                                </div>

                                                <div className="cart__item-controls">
                                                    {/* Вынеси в комнонент */}
                                                    <div className="quantity">
                                                        <span className="quantity__decrease">-</span>
                                                        <span className="quantity__value">{userCartItem.count}</span>
                                                        <span className="quantity__increase">+</span>
                                                    </div>

                                                    <span className="cart__item-price">${(userCartItem.count * price).toFixed(2)}</span>

                                                    <div className="cart__item-remove">
                                                        <TrashIcon/>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="cart__additional-info">

            </div>
        </div>
    )
}

export default Cart;