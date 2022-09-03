import { NavLink, Link } from "react-router-dom";
import CartIcon from "../../assets/icons/CartIcon";
import BellIcon from "../../assets/icons/BellIcon";
import userImage from "../../assets/images/users/user-1.jpg";

interface IMenu {
    type: string;
}

const Menu = (props: IMenu) => {
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
            link: "/",
        }
    ];

    const adminMenu = [
        {
            title: "Dashboard",
            link: "/admin",
        },
        {
            title: "Orders",
            link: "/",
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
            <div className="menu__cart">
                <div className="menu__cart-icon">
                    {props.type === "user" ? <CartIcon/> : <BellIcon/>}
                </div>
                <span className="menu__cart-counter">4</span>
            </div>
            <Link to="/user">
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