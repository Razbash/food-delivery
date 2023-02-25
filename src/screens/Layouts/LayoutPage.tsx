import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './layoutPage.scss';

const LayoutPage = ({children}:any) => {
    return(
        <>
            <Header/>
            <div className="container">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default LayoutPage;