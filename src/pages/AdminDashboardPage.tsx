import Header from "../components/Header/Header";
import Statictics from "../components/Statistics/Statistics";

const AdminDashboard = () => {
    return(
        <>
            <Header type="admin"/>
            <div className="container">
                <h5 className="block-title">Dashboard</h5>

                <Statictics/>
            </div>
        </>
    )
}

export default AdminDashboard;