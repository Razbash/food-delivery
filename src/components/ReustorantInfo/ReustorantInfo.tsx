/// <reference path="../../../ymaps.d.ts" />

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchReustorant } from "../../store/actions/reustorantActions";
import ReustorantDeliveryInfo from "../ReustorantDelivryInfo/ReustorantDeliveryInfo";
import ReustorantMenu from "../ReustorantMenu/ReustorantMenu";
import ReustorantReviews from "../ReustorantReviews/ReustorantReviews";
import IReaustorant from "../../interfaces/IReustorant";

const ReustorantInfo = () => {
    const dispatch = useAppDispatch();
    const {error, loading, reustorant} = useAppSelector(state => state.reustorant);
    const {reustorantId} = useParams();
    const {coordinates} = reustorant;

    useEffect(() => {
        dispatch(fetchReustorant({id: Number(reustorantId)}));
    }, []);

    if (coordinates) {
        ymaps.ready().then(() => {
            let map =  new ymaps.Map("reustorant_location", {
                center: coordinates,
                zoom: 12,
                controls: ['none']
            });
        });
    }

    return(
        <>
            {loading ? <SkeletonReustorantInfo/> : null}
            {error ? <ErrorReustorantInfo/> : null}
            {reustorant ? <ReustorantInfoRender {...reustorant}/> : null}
        </>
    )
}

const SkeletonReustorantInfo = () => {
    return(
        <div className="reustorant-detail-page reustorant-detail-page--skeleton">
            <div className="reustorant-detail-page__header"></div>
            <div className="reustorant-detail-page__content container">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

const ReustorantInfoRender = (props: IReaustorant) => {
    const {image,
        name,
        description,
        menu,
        minDeliveryTime,
        maxDeliveryTime,
        minAmount,
        reviews,
    } = props;

    return(
        <div className="reustorant-detail-page">
            <div className="reustorant-detail-page__header">
                <div className="container reustorant-detail-page__wrapper">
                    <div className="reustorant-detail-page__image-and-info">
                        <div className="reustorant-detail-page__image" style={{'backgroundImage': `url(${image})`}}></div>

                        <div className="reustorant-detail-page__info">
                            <h2 className="reustorant-detail-page__name">{name}</h2>
                            <p className="reustorant-detail-page__description">{description}</p>

                            <ReustorantDeliveryInfo
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
            <div className="reustorant-detail-page__content container">
                {menu ? <ReustorantMenu menu={menu}/> : null}
                {reviews ? <ReustorantReviews reviews={reviews}/> : null}
            </div>
        </div>
    )
}

const ErrorReustorantInfo = () => {
    return(
        <span className="categories-list__error">При загрузке данных произошла обшибка! Попробуйте перезагрузить страницу</span>
    )
}

export default ReustorantInfo;