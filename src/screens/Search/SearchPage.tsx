import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BlockTitle from '../../components/BlockTitle/BlockTitle';
import IRestaurant from '../../interfaces/IRestaurant';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import LayoutPage from '../Layouts/LayoutPage';
import ReustorantsList from '../Reustorants/components/RestaurantsList';
import { fetchRestaurants } from '../Reustorants/store/restaurantsActions';

import SearchNonResult from './components/SerachNonResult';
import './search.scss';

const SearchPage = () => {
    const {searchParametr} = useParams();
    const dispatch = useAppDispatch();
    const {restaurants} = useAppSelector(state => state.restaurants);
    const [restaurantsList, setrestaurantsList] = useState<IRestaurant[]>([]);

    useEffect(() => {
        dispatch(fetchRestaurants());

        const sortedRestaurants = restaurants
            .filter(element => element.name
                .toLowerCase()
                .includes(String(searchParametr)));

        setrestaurantsList(sortedRestaurants);

        // eslint-disable-next-line
    }, [searchParametr]);

    return(
        <LayoutPage>
            <BlockTitle text="Search result"/>

            {restaurantsList.length
                ? <ReustorantsList list={restaurantsList}/>
                : <SearchNonResult/>
            }
        </LayoutPage>
    );
};

export default SearchPage;