import Header from "../components/Header/Header";
import PromoList from "../components/PromoList/PromoList";
import CategoryList from "../components/CategoryList/CategoryList";

const HomePage = () => {
    return(
        <div>
            <Header/>

            <div className="container">
                <PromoList/>
                <CategoryList/>
            </div>
        </div>
    )
}

export default HomePage;