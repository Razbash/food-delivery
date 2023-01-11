import { useEffect, useState } from 'react';
import { fetchRestaurants } from '../store/restaurantsActions';
import { fetchCategories } from '../../../store/Categories/categoriesActions';
import { useAppDispatch, useAppSelector } from '../../../store/redux';

import IRestaurant from '../interfaces/IRestaurant';
import IRestaurantsListProps from '../interfaces/IRestaurantsListProps';
import RestaurantsListItem from './RestaurantsListItem';
import RestaurantsListSkeleton from './RestaurantsListSkeleton';

import '../reustorants.scss';

const ReustorantsList = ({showCounter}: IRestaurantsListProps) => {
    const [restaurantsList, setRestaurantsList] = useState<IRestaurant[]>([]);
    const dispatch = useAppDispatch();
    const {error, loading, restaurants} = useAppSelector(state => state.restaurants);
    const {selectedFilters} = useAppSelector(state => state.selectedFilters);
    const {categories} = useAppSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchRestaurants());
        dispatch(fetchCategories());

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setRestaurantsList(restaurants);
    }, [restaurants]);

    useEffect(() => {
        let renderRestaurants:IRestaurant[] = [];

        restaurants.map((restaurant) => {
            return restaurant.categoriesId.forEach(category => {
                if (selectedFilters.includes(category) && !renderRestaurants.includes(restaurant)) {
                    renderRestaurants.push(restaurant);
                }
            })
        });

        renderRestaurants.length
            ? setRestaurantsList(renderRestaurants)
            : setRestaurantsList(restaurants);

        // eslint-disable-next-line
    }, [selectedFilters]);


    return(
        <>
            {showCounter
                ? <span className="reustorants-list-counter">Found {restaurantsList.length} restaurants</span>
                : null
            }

            <div className="reustorants-list">
                {loading ? <RestaurantsListSkeleton/> : null}
                {restaurantsList.length
                    ? restaurantsList.map(restaurant => {
                        return <RestaurantsListItem key={restaurant.id} categories={categories} restaurant={restaurant}/>
                    })
                : null}
            </div>
        </>
    )
}

export default ReustorantsList;