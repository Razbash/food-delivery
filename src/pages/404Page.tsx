import PageNotFound from "../components/404/404";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Page404 = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <PageNotFound/>
            </div>
            <Footer/>
        </>
    )
}

export default Page404;