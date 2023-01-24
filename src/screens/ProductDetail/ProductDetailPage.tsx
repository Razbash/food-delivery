import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import { fetchRestaurant } from "../RestaurantDetail/store/restaurantActions";
import { fetchProduct } from "./store/productActions";
import { Notification, NotificationTypes, startNotification } from "../../components/Notification";

import LayoutPage from "../Layouts/LayoutPage";
import Product from "./components/Product";
import ProductSkeleton from "./components/ProductSkeleton";

const ProductDetailPage = () => {
    const {productId} = useParams();
    const {error, loading, product} = useAppSelector(state => state.product);
    const {restaurant} = useAppSelector(state => state.restaurant);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProduct(Number(productId)));

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (product.restaurantId) {
            dispatch(fetchRestaurant(product.restaurantId));
        }

        // eslint-disable-next-line
    }, [product]);

    useEffect(() => {
        if (error) {
            dispatch(startNotification({
                type: NotificationTypes.error,
                text: `An error occurred while loading the product info. (${error})`
            }));
        }

        // eslint-disable-next-line
    }, [error]);

    return(
        <LayoutPage>
            {loading ? <ProductSkeleton/> : null}

            {product
                ? <Product product={product}
                    restaurantId={restaurant.id}
                    restaurantName={restaurant.name}
                />
            : null}

            <Notification/>
        </LayoutPage>
    )
}

export default ProductDetailPage;