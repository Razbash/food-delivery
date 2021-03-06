import IDeal from "../../interfaces/IDeal";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import GeoIcon from "../../assets/icons/GeoIcon";

const DealsListItem = (props: IDeal) => {
    const {title, status, image, date, reustorant} = props,
        statusMeta = 'deals-list-item__status deals-list-item__status--' + status,
        backgroundImageStyle = {
            'background': 'url(' + image + ')',
            'backgroundSize': 'cover',
            'backgroundPosition': 'center'
        }

    return(
        <div className="deals-list-item">
            <div className="deals-list-item__header">
                <div className="deals-list-item__title-and-status">
                    <span className={statusMeta}>
                        {status}
                    </span>
                    <span className="deals-list-item__title">{title}</span>
                </div>
                <div className="deals-list-item__image" style={backgroundImageStyle}></div>
            </div>
            <div className="deals-list-item__separator"></div>
            <div className="deals-list-item__info">
                <div className="deals-list-item__info-item">
                    <div className="deals-list-item__info-item-title">
                        <CalendarIcon/>
                        Valid through
                    </div>
                    <span className="deals-list-item__info-item-content">{date}</span>
                </div>
                <div className="deals-list-item__info-item">
                    <div className="deals-list-item__info-item-title">
                        <GeoIcon/>
                        Restaurant
                    </div>
                    <span className="deals-list-item__info-item-content">{reustorant}</span>
                </div>
            </div>
        </div>
    )
}

export default DealsListItem;