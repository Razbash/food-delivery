import { Link } from 'react-router-dom';
import Image from '../../assets/images/404.png';

const PageNotFound = () => {
    return(
        <div className="not-found">
            <div className="not-found__wrapper">
                <h1 className="not-found__title">404</h1>
                <h2 className="not-found__subtitle">Page not found</h2>
                <Link to="/" className="not-found__button button button--contained">Go to home page</Link>
            </div>
            <img src={Image} alt="404" className="not-found__image"/>
        </div>
    )
}

export default PageNotFound;