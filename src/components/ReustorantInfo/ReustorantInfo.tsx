/// <reference path="../../../ymaps.d.ts" />

import { useEffect } from "react";
import reustorantImage from "../../assets/images/reustorants/royalSushiHouse.jpg";
import ReustorantDeliveryInfo from "../ReustorantDelivryInfo/ReustorantDeliveryInfo";
import ReustorantMenu from "../ReustorantMenu/ReustorantMenu";
import ReustorantReviews from "../ReustorantReviews/ReustorantReviews";

const ReustorantInfo = () => {
    useEffect(() => {
        ymaps.ready().then(() => {
            let map =  new ymaps.Map("reustorant_location", {
                center: [50.450100, 30.523400],
                zoom: 12,
                controls: ['none']
            });
        });
    }, []);

    return(
        <div className="reustorant-detail-page">
            <div className="reustorant-detail-page__header">
                <div className="container reustorant-detail-page__wrapper">
                    <div className="reustorant-detail-page__image-and-info">
                        <img src={reustorantImage}
                            alt="Royal sushi house"
                            width="160"
                            height="160"
                            className="reustorant-detail-page__image"
                        />

                        <div className="reustorant-detail-page__info">
                            <h2 className="reustorant-detail-page__name">Royal sushi house</h2>
                            <p className="reustorant-detail-page__description">Veri lobortis contentiones sed ad, duo eu clita dissentiet. Nam primis eligendi salutandi eu, an deseruisse ullamcorper vis.</p>

                            <ReustorantDeliveryInfo
                                minDeliveryTime={30}
                                maxDeliveryTime={40}
                                minAmount={32}
                            />
                        </div>
                    </div>

                    <div className="reustorant-detail-page__map-wrapper">
                        <div id="reustorant_location" className="reustorant-detail-page__map" style={{"width": "350px", "height": "230px"}}></div>
                    </div>
                </div>
            </div>
            <div className="reustorant-detail-page__content container">
                <ReustorantMenu/>
                <ReustorantReviews/>
            </div>
        </div>
    )
}

export default ReustorantInfo;