import './cartItemSkeleton.scss';

const CartItemsSkeleton = () => {
    return(
        <>
            <div className="cart-item-loading"></div>
            <div className="cart-item-loading"></div>
            <div className="cart-item-loading"></div>
        </>
    );
};

export default CartItemsSkeleton;