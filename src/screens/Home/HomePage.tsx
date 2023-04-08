import CategoriesList from '../../components/Categories/components/CategoriesList/CategoriesList';
import LayoutPage from '../Layouts/LayoutPage';
import RestaurantsList from '../Reustorants/components/RestaurantsList/RestaurantsList';

import PromotionsList from './components/PromotionList/PromotionsList';

const HomePage = () => {
    return(
        <LayoutPage>
            <PromotionsList/>
            <CategoriesList/>
            <RestaurantsList/>
        </LayoutPage>
    );
};

export default HomePage;