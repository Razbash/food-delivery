import AdminOrders from "../components/AdminOrders/AdminOrders";
import Header from "../components/Header/Header";

const AdminOrdersPage = () => {
    return(
        <>
            <Header type="admin"/>
            <div className="container">
                <div className="block-title">Reustorant orders</div>
                <AdminOrders/>
            </div>
        </>
    )
}

export default AdminOrdersPage;