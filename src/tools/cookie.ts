interface orderProps {
    productId: number,
    count: number
}

const expiresCookie = new Date(Date.now() + 86400e3).toUTCString();

export function getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + 'cart'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(matches[1]) : null;
}

export function setUserId(userId: string) {
    document.cookie = `userId=${String(userId)}; expires=${expiresCookie}`;
}

export function addToCart(order: orderProps) {
    let cart = getCookie('cart');

    if (cart) {
        let productAlreadyInCart = false;

        cart.forEach((element:orderProps, index: number)  => {
            if (element.productId == order.productId) {
                cart[index].count = element.count + order.count;
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            cart.push(order);
        }

        document.cookie = `cart=${JSON.stringify(cart)}; expires=${expiresCookie}; path=/`;
    } else {
        const JSONorder = JSON.stringify([order]);
        document.cookie = `cart=${JSONorder}; expires=${expiresCookie}; path=/`;
    }
}

export function removeFromCart(arrPosition: number) {
    let cart = getCookie('cart');

    const newCart = cart.filter((element:any, index:number) => {
        if (index !== arrPosition) {
            return element;
        }
    })

    document.cookie = `cart=${JSON.stringify(newCart)}; expires=${expiresCookie}; path=/`;
}