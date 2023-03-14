import { useEffect, useState } from 'react';

import { fetchRestaurants } from '../store/restaurantsActions';
import { fetchCategories } from '../../../store/Categories/categoriesActions';
import { useAppDispatch, useAppSelector } from '../../../store/redux';

import IRestaurant from '../../../interfaces/IRestaurant';
import IRestaurantsListProps from '../interfaces/IRestaurantsListProps';

import RestaurantsListItem from './RestaurantsListItem';
import RestaurantsListSkeleton from './RestaurantsListSkeleton';

import '../reustorants.scss';
import { Notification, startNotification, NotificationTypes } from '../../../components/Notification';

const ReustorantsList = ({showCounter, list}: IRestaurantsListProps) => {
    const [restaurantsList, setRestaurantsList] = useState<IRestaurant[]>([]);
    const dispatch = useAppDispatch();
    const {error, loading, restaurants} = useAppSelector(state => state.restaurants);
    const {selectedFilters} = useAppSelector(state => state.selectedFilters);
    const {categories} = useAppSelector(state => state.categories);

    useEffect(() => {
        if (!list) {
            dispatch(fetchRestaurants());
        }

        dispatch(fetchCategories());

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const finalRestaurantsList = list ? list : restaurants;

        setRestaurantsList(finalRestaurantsList);
    }, [restaurants, list]);

    useEffect(() => {
        const renderRestaurants:IRestaurant[] = [];

        restaurants.map((restaurant) => {
            return restaurant.categoriesId.forEach((category: number) => {
                if (selectedFilters.includes(category) && !renderRestaurants.includes(restaurant)) {
                    renderRestaurants.push(restaurant);
                }
            });
        });

        renderRestaurants.length
            ? setRestaurantsList(renderRestaurants)
            : setRestaurantsList(restaurants);

        // eslint-disable-next-line
    }, [selectedFilters]);

    useEffect(() => {
        if (error) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `An error occurred while loading the list of restaurants. (${error})`,
            }));
        }

        // eslint-disable-next-line
    }, [error]);

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
                        return <RestaurantsListItem key={restaurant.id} categories={categories} restaurant={restaurant}/>;
                    })
                    : null}
            </div>

            <Notification/>
        </>
    );
};

export default ReustorantsList;