import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ReustorantInfo from "../components/ReustorantInfo/ReustorantInfo";
import Notification from "../components/Notification/Notification";

const ReustorantDetailPage = () => {
    return(
        <>
            <Header type="user"/>
            <ReustorantInfo/>
            <Footer/>
            <Notification/>
        </>
    )
}

export default ReustorantDetailPage;