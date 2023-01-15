/// <reference path="../../../../ymaps.d.ts" />

import RestaurantDeliveryInfo from "../../../components/RestaurantDeliveryInfo/RestaurantDeliveryInfo";
import IRestaurant from "../../../interfaces/IRestaurant";

const RestaurantHeader = ({image, name, description, minDeliveryTime, maxDeliveryTime, minAmount, coordinates}: IRestaurant) => {
    if (coordinates) {
        ymaps.ready().then(() => {
            new ymaps.Map("reustorant_location", {
                center: coordinates,
                zoom: 12,
                controls: ['none']
            });
        });
    }

    return(
        <div className="reustorant-detail-page__header">
            <div className="container reustorant-detail-page__wrapper">
                <div className="reustorant-detail-page__image-and-info">
                    <div className="reustorant-detail-page__image" style={{'backgroundImage': `url(${image})`}}></div>

                    <div className="reustorant-detail-page__info">
                        <h2 className="reustorant-detail-page__name">{name}</h2>
                        <p className="reustorant-detail-page__description">{description}</p>

                        <RestaurantDeliveryInfo
                            minDeliveryTime={minDeliveryTime}
                            maxDeliveryTime={maxDeliveryTime}
                            minAmount={minAmount}
                        />
                    </div>
                </div>

                <div className="reustorant-detail-page__map-wrapper">
                    <div id="reustorant_location"
                        className="reustorant-detail-page__map"
                        style={{"width": "350px", "height": "230px"}}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantHeader;