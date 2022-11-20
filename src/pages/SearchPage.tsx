import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchResult from "../components/SearchResult/SearchResult";

const SearchPage = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <h5 className="block-title">Search result</h5>
                <SearchResult/>
            </div>
            <Footer/>
        </>
    )
}

export default SearchPage;