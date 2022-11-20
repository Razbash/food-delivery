import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchPromotions } from "../../store/actions/promotionsActions";

const DeaslsList = () => {
    const dispatch = useAppDispatch();
    const {error, loading, promotions} = useAppSelector(state => state.promotions);

    useEffect(() => {
        dispatch(fetchPromotions());
    }, []);

    return(
        <div className="promotion-list">
            {promotions.map(element => {
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