import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/redux";

import { fetchProducts } from "./store/productsActions";
import { fetchRestaurant } from "./store/restaurantActions";
import { Notification, NotificationTypes, startNotification } from "../../components/Notification";

import {RestaurantHeader, RestaurantHeaderSkeleton} from "./index";
import LayoutPage from "../Layouts/LayoutPage";
import RestaurantMenuList from "./components/RestaurantMenuList";

import './restaurantDetail.scss';

const RestaurantDetailPage = () => {
    const dispatch = useAppDispatch();
    const {restaurantLoading, restaurantError, restaurant} = useAppSelector(state => state.restaurant);
    const {productsLoading, productsError, products} = useAppSelector(state => state.products);
    const {restaurantId} = useParams();

    useEffect(() => {
        dispatch(fetchRestaurant(Number(restaurantId)));
        dispatch(fetchProducts(Number(restaurantId)));

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (restaurantError) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `An error occurred while uploading restaurant data. (${restaurantError})`
            }));
        }

        if (productsError) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `An error occurred while loading the restaurant menu. (${productsError})`
            }));
        }

        // eslint-disable-next-line
    }, [restaurantError, productsError])

    return(
        <LayoutPage>
            <div className="reustorant-detail-page">
                {restaurantLoading ? <RestaurantHeaderSkeleton/> : null}
                {!restaurantLoading && restaurant ? <RestaurantHeader {...restaurant}/> : null}

                <div className="reustorant-detail-page__content">
                    {products ? <RestaurantMenuList products={products} loading={productsLoading}/> : null}
                </div>
            </div>

            <Notification/>
        </LayoutPage>
    )
}

export default RestaurantDetailPage;