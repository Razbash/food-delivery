/// <reference path="../../../../../ymaps.d.ts" />

import RestaurantDeliveryInfo from '../../../../components/RestaurantDeliveryInfo/RestaurantDeliveryInfo';
import IRestaurant from '../../../../interfaces/IRestaurant';
import './restaurantHeader.scss';

const RestaurantHeader = ({image, name, description, minDeliveryTime, maxDeliveryTime, minAmount, coordinates}: IRestaurant) => {
    if (coordinates) {
        ymaps.ready().then(() => {
            new ymaps.Map('reustorant_location', {
                center: coordinates,
                zoom: 12,
                controls: ['none'],
            });
        });
    }

    return(
        <div className="restaurant-header">
            <div className="container restaurant-header__wrapper">
                <div className="restaurant-header__image-and-info">
                    <div className="restaurant-header__image" style={{'backgroundImage': `url(${image})`}}></div>

                    <div className="restaurant-header__info">
                        <h2 className="restaurant-header__name">{name}</h2>
                        <p className="restaurant-header__description">{description}</p>

                        <RestaurantDeliveryInfo
                            minDeliveryTime={minDeliveryTime}
                            maxDeliveryTime={maxDeliveryTime}
                            minAmount={minAmount}
                        />
                    </div>
                </div>

                <div className="restaurant-header__map-wrapper">
                    <div id="reustorant_location"
                        className="restaurant-header__map"
                        style={{'width': '350px', 'height': '230px'}}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantHeader;