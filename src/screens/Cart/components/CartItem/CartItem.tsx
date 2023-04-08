import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { setCookie } from '../../../../utils/cookie/cookie';

import Quantity from '../../../../components/Quantity/Quantity';
import TrashIcon from '../../../../ui/icons/TrashIcon';
import ICartItemProps from '../../interfaces/ICartItemProps';

import './cartItem.scss';

const CartItem = (props :ICartItemProps) => {
    const {id,
        image,
        linkToProduct,
        name,
        description,
        countUserCartItems,
        price,
        index,
        userCart,
        onHandlerRemoveProductFromCart,
        calculateCountProductsInCart,
    } = props;

    const [subtotal, setSubTotal] = useState<number>(countUserCartItems * price);
    const [count, setCount] = useState<number>(countUserCartItems);

    useEffect(() => {
        setSubTotal(count * price);
        calculateCountProductsInCart();

        const newCart = userCart.map(element => {
            if (element.productId === id) {
                element.count = count;
            }

            return element;
        });

        setCookie('cart', JSON.stringify(newCart));

        // eslint-disable-next-line
    }, [count]);

    return(
        <div className="cart-item">
            <div style={{'backgroundImage': 'url(' + image + ')'}}
                className="cart-item__image"
            ></div>

            <div className="cart-item__product-info">
                <Link to={linkToProduct}
                    className="cart-item__name"
                >
                    {name}
                </Link>
                <p className="cart-item__description">{description}</p>
            </div>

            <div className="cart-item__controls">
                <Quantity counter={count} onChangeCounter={setCount}/>
                <span className="cart-item__price">${(subtotal).toFixed(2)}</span>
                <div className="cart-item__remove" onClick={() => onHandlerRemoveProductFromCart(index)}>
                    <TrashIcon/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;