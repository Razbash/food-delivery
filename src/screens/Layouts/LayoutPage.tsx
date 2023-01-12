import Footer from './components/Footer/Footer';
import './layoutPage.scss';

const LayoutPage = ({children}:any) => {
    return(
        <>
            <div className="">Тут будет шапка</div>
            <div className="container">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default LayoutPage;