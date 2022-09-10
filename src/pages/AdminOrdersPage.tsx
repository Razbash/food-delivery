import AdminOders from "../components/AdminOrders/AdminOrders";
import Header from "../components/Header/Header";

const AdminOrdersPage = () => {
    return(
        <>
            <Header type="admin"/>
            <div className="container">
                <div className="block-title">Reustorant orders</div>
                <AdminOders/>
            </div>
        </>
    )
}

export default AdminOrdersPage;