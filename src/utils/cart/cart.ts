import { getCookie, setCookie } from "../cookie/cookie";
import ICart from "../../interfaces/ICart";

export function addToCart(order: ICart) {
    let cart = getCookie('cart');

    if (cart) {
        let productAlreadyInCart = false;

        cart.forEach((element:ICart, index: number)  => {
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

export function removeFromCart(arrPosition: number) {
    let cart = getCookie('cart');

    const newCart = cart.filter((element:ICart, index:number) => index !== arrPosition);

    setCookie('cart', JSON.stringify(newCart));
}

export function countNumberProductsInCart() {
    let cart = getCookie('cart');

    return cart
        ? cart.reduce((previousValue: number, currentItem: ICart) => previousValue + currentItem.count, 0)
        : 0;
}