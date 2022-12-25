import { useState } from "react";
import { Link } from "react-router-dom";
import TrashIcon from "../../assets/icons/TrashIcon";
import ICart from "../../interfaces/ICart";
import { setCart } from "../../tools/cookie";

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
    onChangeTotalPrice: (value: number) => void,
    calculateCountProductsInCart: () => void,
    totalPrice: number,
    userCart: ICart[] | [],
}

enum CartControlsMode {
    INCREASE,
    DESCRESE
}

const CartItem = (props :ICartItemProps) => {
    const {id,
        image,
        linkToProduct,
        name,
        description,
        countUserCartItems,
        price,
        index,
        onHandlerRemoveProductFromCart,
        onChangeTotalPrice,
        calculateCountProductsInCart,
        totalPrice,
        userCart,
    } = props;

    const [subtotal, setSubTotal] = useState<number>(countUserCartItems * price);
    const [count, setCount] = useState<number>(countUserCartItems);

    const onChangeCart = (mode: CartControlsMode) => {
        if (mode === CartControlsMode.INCREASE) {
            setCount(count => count + 1);
            setSubTotal(subtotal => subtotal + price);
            onChangeTotalPrice(totalPrice + price);
        } else if(count !== 1) {
            setCount(count => count - 1);
            setSubTotal(subtotal => subtotal - price);
            onChangeTotalPrice(totalPrice - price);
        }

        const newCart = userCart.map(element => {
            if (element.productId === id) {
                mode === CartControlsMode.INCREASE
                    ? element.count += 1
                    : element.count -= 1;
            }

            return element;
        });

        setCart(newCart);
        calculateCountProductsInCart();
    }

    return(
        <div className="cart__list-item" key={id}>
            <div style={{"backgroundImage": 'url(' + image + ')'}}
                className="cart__item-image"
            ></div>

            <div className="cart__item-product-info">
                <Link to={linkToProduct}
                    className="cart__item-name"
                >
                    {name}
                </Link>
                <p className="cart__item-description">{description}</p>
            </div>

            <div className="cart__item-controls">
                {/* Вынеси в комнонент */}
                <div className="quantity">
                    <span className="quantity__decrease" onClick={() => onChangeCart(CartControlsMode.DESCRESE)}>-</span>
                    <span className="quantity__value">{count}</span>
                    <span className="quantity__increase" onClick={() => onChangeCart(CartControlsMode.INCREASE)}>+</span>
                </div>

                <span className="cart__item-price">${(subtotal).toFixed(2)}</span>

                <div className="cart__item-remove" onClick={() => onHandlerRemoveProductFromCart(index)}>
                    <TrashIcon/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;