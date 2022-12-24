import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const CartPage = () => {
    return(
        <>
            <Header type="user"/>
                <div className="container">
                    <Cart/>
                </div>
            <Footer/>
        </>
    )
}

export default CartPage;