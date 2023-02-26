import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartIcon } from "../../../../ui/icons";
import { countNumberProductsInCart } from "../../../../utils/cart/cart";

const Menu = () => {
    const [countProducts, setCountProducts] = useState(0);

    const userMenu = [
        {
            title: "Restaurants",
            link: "/reustorants",
        },
        {
            title: "Deals",
            link: "/deals",
        },
        {
            title: "My orders",
            link: "/orders",
        }
    ];

    useEffect(() => {
        setCountProducts(countNumberProductsInCart());
    }, []);

    return(
        <div className="menu">
            <ul className="menu__text">
                {userMenu.map((element, index) => {
                    return(
                        <li className="menu__text-item" key={index}>
                            <NavLink to={element.link} end style={({isActive}) => ({color: isActive ? '#4E60FF' : 'inherit'})}>
                                {element.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>

            <Link to="/cart" className="menu__cart">
                <div className="menu__cart-icon">
                    <CartIcon/>
                </div>
                <span className="menu__cart-counter">
                    {countProducts}
                </span>
            </Link>

            <Link to="/auth" className="menu__user">
                <img src={''}
                    alt="User"
                    className="menu__user-image"
                    width="48"
                    height="48"
                />
            </Link>
        </div>
    )
}

export default Menu;