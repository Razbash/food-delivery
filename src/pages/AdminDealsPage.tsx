import EnhancedDeals from "../components/EnhancedDeals/EnhancedDeals";
import Header from "../components/Header/Header";

const AdminDealsPage = () => {
    return(
        <>
            <Header type="admin"/>

            <div className="container">
                <EnhancedDeals/>
            </div>
        </>
    )
}

export default AdminDealsPage;