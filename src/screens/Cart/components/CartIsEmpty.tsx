import { Link } from 'react-router-dom';

const CartIsEmpty = () => {
    return(
        <div className="cart-is-empty">
            <h3 className="cart-is-empty__title">The basket is empty</h3>
            <p className="cart-is-empty__text">Take a look at the main page to select products or find what you need in the search</p>
            <Link to="/" className="cart-is-empty__link button">Go to the main page</Link>
        </div>
    );
};

export default CartIsEmpty;