import AdminOrders from "../components/AdminOrders/AdminOrders";
import Header from "../components/Header/Header";

const AdminOrdersPage = () => {
    return(
        <>
            <Header type="admin"/>
            <div className="container">
                <h5 className="block-title">Reustorant orders</h5>
                <AdminOrders/>
            </div>
        </>
    )
}

export default AdminOrdersPage;