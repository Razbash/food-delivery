import Header from "../components/Header/Header";
import PromoList from "../components/PromoList/PromoList";

const HomePage = () => {
    return(
        <div>
            <Header/>

            <div className="container">
                <PromoList/>
            </div>
        </div>
    )
}

export default HomePage;