import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchResult from "../components/SearchResult/SearchResult";

const SearchPage = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <div className="block-title">Search result</div>
                <SearchResult/>
            </div>
            <Footer/>
        </>
    )
}

export default SearchPage;