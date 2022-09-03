import AdminReustorantsList from "../components/AdminReustorantsList/AdminReustorantsList";
import Header from "../components/Header/Header";

const AdminReustorantsPage = () => {
    return(
        <>
            <Header type="admin"/>
            <div className="container">
                <div className="block-title-with-button">
                    <h2 className="block-title">Reustorants list</h2>
                    <button className="button button--contained">Добавить ресторан</button>
                </div>
                <AdminReustorantsList/>
            </div>
        </>
    )
}

export default AdminReustorantsPage;