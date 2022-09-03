import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserOrders from "../components/UserOrders/UserOrders";

const UserOrdersPage = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <div className="block-title">My orders</div>
                <UserOrders/>
            </div>
            <Footer/>
        </>
    )
}

export default UserOrdersPage;