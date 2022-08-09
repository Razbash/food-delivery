import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import UserProfile from "../components/UserProfile/UserProfile";

const UserProfilePage = () => {
    return(
        <>
            <Header type="user"/>
            <div className="container">
                <UserProfile/>
            </div>
            <Footer/>
        </>
    )
}

export default UserProfilePage;