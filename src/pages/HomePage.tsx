import Header from "../components/Header/Header";
import PromoList from "../components/PromoList/PromoList";
import CategoryList from "../components/CategoryList/CategoryList";
import ReustorantsList from "../components/ReustorantsList/ReustorantsList";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return(
        <div>
            <Header/>

            <div className="container">
                <PromoList/>
                <CategoryList/>
                <ReustorantsList/>
            </div>

            <Footer/>
        </div>
    )
}

export default HomePage;