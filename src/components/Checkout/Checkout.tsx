import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { sendOrder } from "../../store/actions/ordersActions";
import { fetchUser } from "../../store/actions/userActions";
import { getCookie } from "../../tools/cookie";
import Payments from "../Payments/Payments";
import Summary from "../Summary/Summary";

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState();

    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.user);
    const orderData = getCookie('orderData');

    useEffect(() => {
        const userId = getCookie('userId');
        dispatch(fetchUser({id: Number(userId)}));
    }, []);

    const onSelectPayment = (payment: any) => {
        setSelectedPayment(payment);
    }

    const onSubmitOrder = () => {
        const currentDate = new Date().toLocaleString('en-US', {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        const currentTime = new Date().toLocaleString('en-US', {
            hour: "numeric",
            minute: "numeric",
        });

        const order = {
            creationDate: currentDate,
            creationTime: currentTime,
            address: orderData.address,
            payment: selectedPayment,
            products: orderData.products,
            totalAmount: orderData.totalAmount,
            customerId: user.id,
            status: "Order placed"
        }

        dispatch(sendOrder(order));
    }

    return(
        <div className="checkout">
            {/* TODO: Вынеси в компонент */}
            <Link to="/cart" className="checkout__back-to-cart">
                <ArrowIcon/>
                <span className="checkout__back-to-cart-text">Back to cart</span>
            </Link>

            <div className="checkout__wrapper">
                <div className="checkout__item">
                    <Payments title={"Select payment method"}
                        cardToAdd={true}
                        cardSavingCheckbox={true}
                        userData={user}
                        onSelectPayment={onSelectPayment}
                        selectedPayment={selectedPayment}
                    />
                </div>
                <div className="checkout__item">
                    <Summary totalPrice={orderData.totalAmount}
                        buttonText="Submit order"
                        onSubmit={onSubmitOrder}
                    />
                </div>
            </div>
        </div>
    )
}

export default Checkout;