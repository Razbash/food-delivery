import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Order from "../components/Order/Order";

const OrderDetailPage = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <Order/>
            </div>
            <Footer/>
        </>
    )
}

export default OrderDetailPage;