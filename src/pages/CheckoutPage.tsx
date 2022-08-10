import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const CheckoutPage = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <Checkout/>
            </div>
            <Footer/>
        </>
    )
}

export default CheckoutPage;