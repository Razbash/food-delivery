import CategoryList from "../components/CategoryList/CategoryList";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ReustorantsList from "../components/ReustorantsList/ReustorantsList";

const ReustorantsPage = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <h5 className="block-title">All reustorants</h5>
                <CategoryList/>
                <Filters/>
                <ReustorantsList showCounter={true}/>
            </div>
            <Footer/>
        </>
    )
}

export default ReustorantsPage;