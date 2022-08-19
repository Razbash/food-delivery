import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <ProductDetail/>
            </div>
            <Footer/>
        </>
    )
}

export default ProductDetailPage;