import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DealsList from "../components/DealsList/DealsList";

const DealsPage = () => {
    return(
        <>
            <Header type="user"/>

            <div className="container">
                <h5 className="block-title">All deals</h5>
                <DealsList/>
            </div>

            <Footer/>
        </>
    )
}

export default DealsPage;