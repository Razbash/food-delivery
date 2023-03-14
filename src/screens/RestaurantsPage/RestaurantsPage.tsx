import CategoriesList from '../../components/Categories/CategoriesList';
import LayoutPage from '../Layouts/LayoutPage';
import RestaurantsList from '../Reustorants/components/RestaurantsList';

const RestaurantsPage = () => {
    return(
        <LayoutPage>
            <CategoriesList/>
            <RestaurantsList/>
        </LayoutPage>
    );
};

export default RestaurantsPage;