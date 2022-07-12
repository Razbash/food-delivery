import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DealsList from "../components/DealsList/DealsList";

const DealsPage = () => {
    return(
        <>
            <Header/>

            <div className="container">
                <DealsList/>
            </div>

            <Footer/>
        </>
    )
}

export default DealsPage;