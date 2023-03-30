import IPromotion from '../interface/IPromotion';

const PromotionsListItem = ({image, name, text, category, background, color}: IPromotion) => {
    const elementStyle = {'background': background};
    const titleStyle = {'color': color};

    return(
        <div className="promotion-list__item"
            style={elementStyle}
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
};

export default PromotionsListItem;