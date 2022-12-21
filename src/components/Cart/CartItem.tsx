import { Link } from "react-router-dom";
import TrashIcon from "../../assets/icons/TrashIcon";

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
        onHandlerRemoveProductFromCart
    } = props;

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
                    <span className="quantity__decrease">-</span>
                    <span className="quantity__value">{countUserCartItems}</span>
                    <span className="quantity__increase">+</span>
                </div>

                <span className="cart__item-price">${(countUserCartItems * price).toFixed(2)}</span>

                <div className="cart__item-remove" onClick={() => onHandlerRemoveProductFromCart(index)}>
                    <TrashIcon/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;