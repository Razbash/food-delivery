import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import IPromo from "../../interfaces/IPromo";
import { fetchPromotions } from "../../store/actions/promotionsActions";

interface DealsListRenderProps {
    data: IPromo[],
}

const DeaslsList = () => {
    const dispatch = useAppDispatch();
    const {error, loading, promotions} = useAppSelector(state => state.promotions);

    useEffect(() => {
        dispatch(fetchPromotions());
    }, []);

    return(
        <>
            {loading ? <DealsListSkeleton/> : null}
            {promotions && !error ? <DealsListRender data={promotions}/> : null}
        </>
    )
}

const DealsListSkeleton = () => {
    return(
        <div className="promotion-list">
            <div className="promotion-list__item promotion-list__item--skeleton"></div>
            <div className="promotion-list__item promotion-list__item--skeleton"></div>
        </div>
    )
}

const DealsListRender = (props:DealsListRenderProps) => {
    return(
        <div className="promotion-list">
            {props.data.map(element => {
                const {image, name, text, category, background, color} = element;
                const elementStyle = {"background": background};
                const titleStyle = {"color": color};

                return(
                    <div className="promotion-list__item"
                        style={elementStyle}
                        key={element.id}
                    >
                        <div className="promotion-list__image-wrapper">
                            <img src={image}
                                alt={name}
                                className="promotion-list__image"
                                width="200"
                                height="200"
                            />
                        </div>

                        <div className="promotion-list__info">
                            <h5 className="promotion-list__name">
                                {name}
                            </h5>
                            <h2 className="promotion-list__text" style={titleStyle}>
                                {text}
                            </h2>
                            <span className="promotion-list__category">
                                {category}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DeaslsList;