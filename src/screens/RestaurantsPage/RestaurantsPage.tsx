import CategoriesList from '../../components/Categories/components/CategoriesList/CategoriesList';
import LayoutPage from '../Layouts/LayoutPage';
import RestaurantsList from '../Reustorants/components/RestaurantsList/RestaurantsList';

const RestaurantsPage = () => {
    return(
        <LayoutPage>
            <CategoriesList/>
            <RestaurantsList/>
        </LayoutPage>
    );
};

export default RestaurantsPage;