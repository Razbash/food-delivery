import CategoriesList from '../../components/Categories/CategoriesList';
import LayoutPage from '../Layouts/LayoutPage';
import RestaurantsList from '../Reustorants/components/RestaurantsList';

const HomePage = () => {
    return(
        <LayoutPage>
            <CategoriesList/>
            <RestaurantsList/>
        </LayoutPage>
    )
}

export default HomePage;