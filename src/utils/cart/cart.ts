import { getCookie, setCookie } from "../cookie/cookie";
import IOrderProps from "./IOrderProps";

export function addToCart(order: IOrderProps) {
    let cart = getCookie('cart');

    if (cart) {
        let productAlreadyInCart = false;

        cart.forEach((element:IOrderProps, index: number)  => {
            if (element.productId === order.productId) {
                cart[index].count = element.count + order.count;
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            cart.push(order);
        }

        setCookie('cart', JSON.stringify(cart));
    } else {
        const JSONorder = JSON.stringify([order]);
        setCookie('cart', JSONorder);
    }
}