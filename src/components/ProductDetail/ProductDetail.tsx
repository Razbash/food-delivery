import { useState } from "react";
import { useParams } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
// TODO: Убери
import one from "../../assets/images/products/1.png";
import two from "../../assets/images/products/2.png";
import three from "../../assets/images/products/3.png";
import four from "../../assets/images/products/4.png";

const ProductDetail = () => {
    const [activeImage, setActiveImage] = useState<number>(0);
    const [counter, setCounter] = useState<number>(1);
    const {reustorantId} = useParams();

    const images = [one, two, three, four];
    const quantityDecreaseMeta = counter === 1
        ? 'product-detail__quantity-decrease product-detail__quantity-decrease--disabled'
        : 'product-detail__quantity-decrease';
    const mainImageStyle = {
        'backgroundImage': 'url(' + images[activeImage] + ')'
    };

    const switchImage = (index: number) => {
        setActiveImage(index);
    }

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

    return(
        <div className="product-detail">
            {/* TODO: Вынеси в компонент */}
            <div className="checkout__back-to-cart">
                <ArrowIcon/>
                <span className="checkout__back-to-cart-text">Royal Sushi House</span>
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
                                    style={imageStyle}
                                    onClick={() => switchImage(index)}
                                ></div>
                            )
                        })}
                    </div>
                    <div className="product-detail__main-image" style={mainImageStyle}></div>
                </div>
                <div className="product-detail__info">
                    <h4 className="product-detail__title">Nigiri set</h4>
                    <p className="product-detail__description">Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe. No malis harum saperet eum, eu minim perfecto salutandi cum, usu at constituto mnesarchum.</p>
                    <div className="product-detail__controls">
                        <span className="product-detail__price">$ {(16.80 * counter).toFixed(2)}</span>
                        <div className="product-detail__quantity">
                            <span className={quantityDecreaseMeta} onClick={() => changeCount('decrease')}>-</span>
                            <span className="product-detail__quantity-value">{counter}</span>
                            <span className="product-detail__quantity-increase" onClick={() => changeCount('increase')}>+</span>
                        </div>
                        <button className="button button--contained">Add to cart</button>
                    </div>
                    <div className="product-detail__additional-info">
                        <div className="product-detail__additional-info-item">
                            <span className="product-detail__additional-info-title">Ingredients</span>
                            <p className="product-detail__additional-info-value">Lorem ipsum dolor sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.</p>
                        </div>
                        <div className="product-detail__additional-info-item">
                            <span className="product-detail__additional-info-title">Nutritional value</span>
                            <p className="product-detail__additional-info-value">Proteins - 7.11, Fats - 5.17, Carbohydrates - 18.40, 146 kkal. (for 100 g.)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;