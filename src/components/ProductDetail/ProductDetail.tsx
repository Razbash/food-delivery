import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProduct } from "../../store/actions/productAction";
import { fetchReustorants } from "../../store/actions/reustorantsActions";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../tools/cookie";

const ProductDetail = () => {
    const [activeImage, setActiveImage] = useState<number>(0);
    const [counter, setCounter] = useState<number>(1);
    const {productId} = useParams();
    const dispatch = useAppDispatch();
    const {error, loading, product} = useAppSelector(state => state.product);
    const {reustorants} = useAppSelector(state => state.reustorants);

    let navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProduct({id: Number(productId)}));
        dispatch(fetchReustorants());
    }, []);

    // Вынести в общую функцию
    const redirectOnReustorantPage = (reustorantName: string) => {
        reustorants.forEach(element => {
            if (element.name === reustorantName) {
                navigate(`/reustorant/${element.id}`);
            }
        });
    }

    const {
        id,
        name,
        description,
        price,
        image,
        ingredients,
        nutritionalValue,
        images,
        reustorant
    } = product;

    const quantityDecreaseMeta = counter === 1
        ? 'product-detail__quantity-decrease product-detail__quantity-decrease--disabled'
        : 'product-detail__quantity-decrease';
    const mainImageStyle = {
        'backgroundImage': 'url(' + images[activeImage] + ')'
    };

    const switchImage = (index: number) => {
        setActiveImage(index);
    }

    // Вынести
    const changeCount = (type: string) => {
        switch(type) {
            case 'increase':
                setCounter(counter + 1);
                break;
            case 'decrease':
                setCounter(counter - 1);
                break;
        }
    }

    const addProductToCart = () => {
        const order = {
            productId: Number(productId),
            count: counter
        }

        addToCart(order);
    }

    return(
        <div className="product-detail">
            {/* TODO: Вынеси в компонент */}
            <div className="checkout__back-to-cart" onClick={() => redirectOnReustorantPage(reustorant)}>
                <ArrowIcon/>
                <span className="checkout__back-to-cart-text">{reustorant}</span>
            </div>
            <div className="product-detail__wrapper">
                <div className="product-detail__images-gallery">
                    <div className="product-detail__images">
                        {images.map((element, index) => {
                            const imageStyle = {
                                'backgroundImage': 'url(' + element + ')'
                            };

                            const imageMeta = index === activeImage
                                ? 'product-detail__image product-detail__image--active'
                                : 'product-detail__image';

                            return(
                                <div className={imageMeta}
                                    key={index}
                                    style={imageStyle}
                                    onMouseEnter={() => switchImage(index)}
                                ></div>
                            )
                        })}
                    </div>
                    <div className="product-detail__main-image" style={mainImageStyle}></div>
                </div>
                <div className="product-detail__info">
                    <h4 className="product-detail__title">{name}</h4>
                    <p className="product-detail__description">{description}</p>
                    <div className="product-detail__controls">
                        <span className="product-detail__price">$ {(price * counter).toFixed(2)}</span>

                        {/* Вынести в компонент */}
                        <div className="product-detail__quantity">
                            <span className={quantityDecreaseMeta} onClick={() => changeCount('decrease')}>-</span>
                            <span className="product-detail__quantity-value">{counter}</span>
                            <span className="product-detail__quantity-increase" onClick={() => changeCount('increase')}>+</span>
                        </div>
                        <button className="button button--contained" onClick={() => addProductToCart()}>Add to cart</button>
                    </div>
                    <div className="product-detail__additional-info">
                        <div className="product-detail__additional-info-item">
                            <span className="product-detail__additional-info-title">Ingredients</span>
                            <p className="product-detail__additional-info-value">{ingredients}</p>
                        </div>
                        <div className="product-detail__additional-info-item">
                            <span className="product-detail__additional-info-title">Nutritional value</span>
                            <p className="product-detail__additional-info-value">{nutritionalValue}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;