import PlusIcon from '../../assets/icons/PlusIcon';
import { Link } from 'react-router-dom';
import IReustorantMenu from '../../interfaces/IReustorantMenu';
import { addToCart } from '../../tools/cookie';
import { startNotification } from "../../store/actions/notificationActions";
import NotificationTypes from "../../enums/NotificationTypes";
import { useAppDispatch } from '../../hooks/redux';

interface IreustorantMenuProps {
    menu: IReustorantMenu[]
}

const ReustorantMenu = (props: IreustorantMenuProps) => {
    const {menu} = props;
    const dispatch = useAppDispatch();

    const addProductToCart = (event: any, productId: number) => {
        event.preventDefault();

        const order = {
            productId: Number(productId),
            count: 1
        }

        addToCart(order);
        dispatch(startNotification({type: NotificationTypes.sucsses, text: "The product has been added to the cart"}));
    }

    return(
        <div className="reustorant-menu">
            <h5 className="reustorant-menu__label">Menu</h5>

            <div className="reustorant-menu__wrapper">
                {menu.map(element => {
                    const {id, name, description, price, image} = element;
                    const backgroundImageStyle = {
                        'background': 'url(' + image + ')',
                        'backgroundSize': 'cover',
                        'backgroundPosition': 'center'
                    }

                    return(
                        <Link to={`/products/${id}`} className="reustorant-menu__item" key={id}>
                            <div className="reustorant-menu__image" style={backgroundImageStyle}></div>
                            <span className="reustorant-menu__name">
                                {name}
                            </span>
                            <p className="reustorant-menu__description">
                                {description}
                            </p>
                            <div className="reustorant-menu__control">
                                <span className="reustorant-menu__price">
                                    $ {price.toFixed(2)}
                                </span>
                                <span className="reustorant-menu__icon-wrapper"
                                    onClick={(event) => addProductToCart(event, id)}
                                >
                                    <PlusIcon/>
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ReustorantMenu;