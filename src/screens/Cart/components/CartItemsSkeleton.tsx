const CartItemsSkeleton = () => {
    return(
        <>
            <div className="cart__list-item cart__list-item--loading"></div>
            <div className="cart__list-item cart__list-item--loading"></div>
            <div className="cart__list-item cart__list-item--loading"></div>
        </>
    );
};

export default CartItemsSkeleton;