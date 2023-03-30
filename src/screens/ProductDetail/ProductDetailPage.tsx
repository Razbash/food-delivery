import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/redux';
import { fetchRestaurant } from '../RestaurantDetail/store/restaurantActions';

import { Notification, NotificationTypes, startNotification } from '../../components/Notification';
import { addToCart } from '../../utils/cart/cart';

import LayoutPage from '../Layouts/LayoutPage';

import { fetchProduct } from './store/productActions';
import Product from './components/Product';
import ProductSkeleton from './components/ProductSkeleton';

const ProductDetailPage = () => {
    const {productId} = useParams();
    const {error, loading, product} = useAppSelector(state => state.product);
    const {restaurant} = useAppSelector(state => state.restaurant);

    const [counter, setCounter] = useState<number>(1);

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
                text: `An error occurred while loading the product info. (${error})`,
            }));
        }

        // eslint-disable-next-line
    }, [error]);

    const onChangeCounter = (count: number) => {
        setCounter(count);
    };

    const addProductToCart = () => {
        const order = {
            productId: Number(productId),
            count: counter,
        };

        addToCart(order);

        dispatch(startNotification({
            type: NotificationTypes.sucsses,
            text: 'The product has been added to the cart',
        }));
    };

    return(
        <LayoutPage>
            {loading ? <ProductSkeleton/> : null}

            {product
                ? <Product product={product}
                    restaurantId={restaurant.id}
                    restaurantName={restaurant.name}
                    counter={counter}
                    onChangeCounter={onChangeCounter}
                    addProductToCart={addProductToCart}
                />
                : null}

            <Notification/>
        </LayoutPage>
    );
};

export default ProductDetailPage;