import { NavLink, Link } from "react-router-dom";
import CartIcon from "../../assets/icons/CartIcon";
import BellIcon from "../../assets/icons/BellIcon";
import userImage from "../../assets/images/users/user-1.jpg";
import { countNumberProductsInCart } from "../../tools/cookie";
import { useEffect, useState } from "react";

interface IMenu {
    type: string;
}

const Menu = (props: IMenu) => {
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

    const adminMenu = [
        {
            title: "Dashboard",
            link: "/admin",
        },
        {
            title: "Orders",
            link: "/admin/orders",
        },
        {
            title: "Customers",
            link: "/",
        },
        {
            title: "Reustorants",
            link: "/admin/reustorants",
        },
        {
            title: "Promotions",
            link: "/admin/deals",
        }
    ];

    useEffect(() => {
        setCountProducts(countNumberProductsInCart());
    }, []);

    const menu = props.type === "user" ? userMenu : adminMenu;

    return(
        <div className="menu">
            <ul className="menu__text">
                {menu.map((element, index) => {
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
                <span className="menu__cart-counter">{countProducts}</span>
            </Link>
            <Link to="/user" className="menu__user">
                <img src={userImage}
                    alt="User image"
                    className="menu__user-image"
                    width="48"
                    height="48"
                />
            </Link>
        </div>
    )
}

export default Menu;