import { NavLink } from "react-router-dom";
import CartIcon from "../../assets/icons/CartIcon";
import userImage from "../../assets/images/users/user-1.jpg";

const Menu = () => {
    return(
        <div className="menu">
            <ul className="menu__text">
                <li className="menu__text-item">
                    Restaurants
                </li>
                <li className="menu__text-item">
                    <NavLink to="/deals" end style={({isActive}) => ({color: isActive ? '#4E60FF' : 'inherit'})}>
                        Deals
                    </NavLink>
                </li>
                <li className="menu__text-item">
                    My orders
                </li>
            </ul>
            <div className="menu__cart">
                <div className="menu__cart-icon">
                    <CartIcon/>
                </div>
                <span className="menu__cart-counter">4</span>
            </div>
            <img src={userImage}
                alt="User image"
                className="menu__user-image"
                width="48"
                height="48"
            />
        </div>
    )
}

export default Menu;