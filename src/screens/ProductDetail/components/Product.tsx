import { useState } from "react";
import Navigation from "../../../components/Navigation/Navigation";
import Quantity from "../../../components/Quantity/Quantity";
import IProductProps from "../interfaces/IProductProps";

import "../productDetail.scss";

const Product = ({product, restaurantId, restaurantName, counter, onChangeCounter, addProductToCart}: IProductProps) => {
    const [activeImage, setActiveImage] = useState<number>(0);

    const {images, name, description, nutritionalValue, ingredients, price} = product;

    return(
        <div className="product-detail">
            <Navigation link={`/restaurant/${restaurantId}`} text={restaurantName}/>

            <div className="product-detail__wrapper">
                <div className="product-detail__images-gallery">
                    <div className="product-detail__images">
                        {images ? images.map((element, index) => {
                            const imageStyle = {
                                'backgroundImage': 'url(' + element + ')'
                            };

                            let imageMeta = "product-detail__image";

                            if (index === activeImage) {
                                imageMeta += " product-detail__image--active";
                            }

                            return(
                                <div className={imageMeta}
                                    key={index}
                                    style={imageStyle}
                                    onMouseEnter={() => setActiveImage(index)}
                                ></div>
                            )
                        }): null}
                    </div>
                    <div className="product-detail__main-image" style={{'backgroundImage': 'url(' + images[activeImage] + ')'}}></div>
                </div>

                <div className="product-detail__info">
                    <h4 className="product-detail__title">{name}</h4>
                    <p className="product-detail__description">{description}</p>
                    <div className="product-detail__controls">
                        <span className="product-detail__price">$ {price.toFixed(2)}</span>
                        <Quantity counter={counter} onChangeCounter={onChangeCounter}/>
                        <button className="button button--contained"
                            onClick={() => addProductToCart()}
                        >Add to cart</button>
                    </div>
                    <div className="product-detail__additional-info">
                        {ingredients
                            ? <div className="product-detail__additional-info-item">
                                <span className="product-detail__additional-info-title">Ingredients</span>
                                <p className="product-detail__additional-info-value">{ingredients}</p>
                            </div>
                            : null
                        }
                        {nutritionalValue
                            ? <div className="product-detail__additional-info-item">
                                <span className="product-detail__additional-info-title">Nutritional value</span>
                                <p className="product-detail__additional-info-value">{nutritionalValue}</p>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;