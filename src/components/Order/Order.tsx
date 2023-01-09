import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import IProduct from "../../interfaces/IProduct";
import { fetchOrder } from "../../store/actions/orderActions";
import { countNumberProductsInCart } from "../../tools/cookie";
import CartItem from "../Cart/CartItem";

const Order = () => {
    const {orderId} = useParams();
    const dispatch = useAppDispatch();
    const {error, loading, order} = useAppSelector(state => state.order);
    const {id, creationDate, creationTime, products} = order;

    const [countProductsInCart, setCountProductsInCart] = useState<number>(0);

    useEffect(() => {
        dispatch(fetchOrder({id: Number(orderId)}));
        setCountProductsInCart(countNumberProductsInCart());
    }, []);

    return(
        <div className="order-detail">
            {/* TODO: Вынеси в компонент */}
            <Link to='/orders' className="checkout__back-to-cart">
                <ArrowIcon/>
                <span className="checkout__back-to-cart-text">My orders</span>
            </Link>

            <div className="order-detail__wrapper">
                <div className="order-detail__left">
                    {/* Вынести в компонент */}
                    <div className="order-detail__item">
                        <div className="order-delivery-info">
                            <div className="order-delivery-info__title">
                                <h6 className="order-delivery-info__title-text">Order status</h6>
                                <span className="order-delivery-info__id">ID {id}</span>
                            </div>
                        </div>
                        <div className="order-delivery-info__status-and-date">
                            <div className="order-delivery-info__status">TODO: статус</div>
                            <div className="order-delivery-info__date">
                                {creationDate}, {creationTime} <CalendarIcon/>
                            </div>
                        </div>
                        <div className="order-delivery-info__progress">
                            <div className="order-delivery-info__progress-item">
                                <div className="order-delivery-info__progress-icon order-delivery-info__progress-icon--check">
                                    <CheckIcon/>
                                </div>
                                <span className="order-delivery-info__status-text">Order placed</span>
                            </div>
                            <div className="order-delivery-info__separator"></div>
                            <div className="order-delivery-info__progress-item">
                                <div className="order-delivery-info__progress-icon">
                                    <span className="order-delivery-info__status-number">2</span>
                                </div>
                                <span className="order-delivery-info__status-text">Order being prepared</span>
                            </div>
                            <div className="order-delivery-info__separator"></div>
                            <div className="order-delivery-info__progress-item">
                                <div className="order-delivery-info__progress-icon">
                                    <span className="order-delivery-info__status-number">3</span>
                                </div>
                                <span className="order-delivery-info__status-text">Out of delivery</span>
                            </div>
                            <div className="order-delivery-info__separator"></div>
                            <div className="order-delivery-info__progress-item">
                                <div className="order-delivery-info__progress-icon">
                                    <span className="order-delivery-info__status-number">4</span>
                                </div>
                                <span className="order-delivery-info__status-text">Delivered</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-detail__item">
                        {/* Вынести в компонент с корзиной */}
                        <div className="cart__wrapper">
                            <div className="cart__block-item">
                                <div className="cart__block-item-title">
                                    <h6 className="cart__block-item-title-text">Menu</h6>
                                    <span className="cart__block-item-title-counter">{countProductsInCart} meals</span>
                                </div>
                                <div className="cart__list">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-detail__right">
                    <div className="order-detail__item"></div>
                    <div className="order-detail__item"></div>
                </div>
            </div>
        </div>
    )
}

export default Order;