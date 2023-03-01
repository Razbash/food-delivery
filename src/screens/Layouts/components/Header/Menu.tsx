import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/redux";
import { fetchUser } from "../../../../store/User/userActions";
import { CartIcon } from "../../../../ui/icons";
import { countNumberProductsInCart } from "../../../../utils/cart/cart";
import { getCookie } from "../../../../utils/cookie/cookie";

const Menu = () => {
    const [countProducts, setCountProducts] = useState(0);
    const [userImage, setUserImage] = useState("../../assets/images/users/user.png");
    const [userLink, setUserLink] = useState('auth');
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.user);

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
        const userId = getCookie('userId');

        if (userId) {
            dispatch(fetchUser('', userId));
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (user && user[0]) {
            setUserLink('account');

            if (user[0].image) {
                setUserImage(user[0].image);
            }
        }
    }, [user]);

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

            <Link to={`/${userLink}`} className="menu__user">
                <img src={userImage}
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