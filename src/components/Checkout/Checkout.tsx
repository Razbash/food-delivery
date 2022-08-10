import ArrowIcon from "../../assets/icons/ArrowIcon";
import Payments from "../Payments/Payments";
import Summary from "../Summary/Summary";

const Checkout = () => {
    return(
        <div className="checkout">
            <div className="checkout__back-to-cart">
                <ArrowIcon/>
                <span className="checkout__back-to-cart-text">Back to cart</span>
            </div>

            <div className="checkout__wrapper">
                <div className="checkout__item">
                    <h6 className="checkout__label">Select payment method</h6>
                    <Payments/>
                </div>
                <div className="checkout__item">
                    <h6 className="checkout__label">Payment summary</h6>
                    <Summary/>
                </div>
            </div>
        </div>
    )
}

export default Checkout;