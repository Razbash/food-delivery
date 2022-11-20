import { useEffect, useState } from 'react';
import TrashIcon from '../../assets/icons/TrashIcon';
import image from '../../assets/images/menu/rollSet.png';
import { getCookie } from '../../tools/cookie';

const Cart = () => {
    const [userCart, setUserCart] = useState(null);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setUserCart(getCookie('cart'));
    },[]);

    return(
        <div className="cart">
            <div className="cart__wrapper">
                <div className="cart__block-item">
                    <div className="cart__block-item-title">
                        <h6 className="cart__block-item-title-text">Menu</h6>
                        <span className="cart__block-item-title-counter">4 meals</span>
                    </div>
                    <div className="cart__list">
                        <div className="cart__list-item">
                            <div style={{"backgroundImage": 'url(' + image + ')'}}
                                className="cart__item-image"
                            ></div>

                            <div className="cart__item-product-info">
                                <span className="cart__item-name">Chicken & Ribs Combo</span>
                                <p className="cart__item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quasi ducimus tempora explicabo quam placeat cumque, aut alias, assumenda voluptates pariatur quis, temporibus sed dolorum nobis tenetur. Quas, est.</p>
                            </div>

                            <div className="cart__item-controls">
                                {/* Вынести в компонент */}
                                <div className="quantity">
                                    <span className="quantity__decrease">-</span>
                                    <span className="quantity__value">1</span>
                                    <span className="quantity__increase">+</span>
                                </div>

                                <span className="cart__item-price">$12.40</span>

                                <div className="cart__item-remove">
                                    <TrashIcon/>
                                </div>
                            </div>
                        </div>

                        <div className="cart__list-item">
                            <div style={{"backgroundImage": 'url(' + image + ')'}}
                                className="cart__item-image"
                            ></div>

                            <div className="cart__item-product-info">
                                <span className="cart__item-name">Chicken & Ribs Combo</span>
                                <p className="cart__item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic quasi ducimus tempora explicabo quam placeat cumque, aut alias, assumenda voluptates pariatur quis, temporibus sed dolorum nobis tenetur. Quas, est.</p>
                            </div>

                            <div className="cart__item-controls">
                                {/* Вынести в компонент */}
                                <div className="quantity">
                                    <span className="quantity__decrease">-</span>
                                    <span className="quantity__value">1</span>
                                    <span className="quantity__increase">+</span>
                                </div>

                                <span className="cart__item-price">$12.40</span>

                                <div className="cart__item-remove">
                                    <TrashIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart__additional-info">

            </div>
        </div>
    )
}

export default Cart;