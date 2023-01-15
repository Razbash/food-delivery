import CategoriesList from '../../components/Categories/CategoriesList';
import LayoutPage from '../Layouts/LayoutPage';
import RestaurantsList from '../Reustorants/components/RestaurantsList';
import PromotionsList from './components/PromotionsList';

const HomePage = () => {
    return(
        <LayoutPage>
            <PromotionsList/>
            <CategoriesList/>
            <RestaurantsList/>
        </LayoutPage>
    )
}

export default HomePage;