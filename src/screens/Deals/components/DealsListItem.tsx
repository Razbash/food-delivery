import { CalendarIcon, GeoIcon } from "../../../ui/icons";
import IDeal from "../interfaces/IDeal";

const DealsListItem = ({title, status, image, date, restaurant}: IDeal) => {
        const statusMeta = 'deals-list-item__status deals-list-item__status--' + status;

    return(
        <div className="deals-list-item">
            <div className="deals-list-item__header">
                <div className="deals-list-item__title-and-status">
                    <span className={statusMeta}>
                        {status}
                    </span>
                    <span className="deals-list-item__title">{title}</span>
                </div>
                <div className="deals-list-item__image" style={{"backgroundImage": `url(${image})`}}></div>
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
                    <span className="deals-list-item__info-item-content">{restaurant}</span>
                </div>
            </div>
        </div>
    )
}

export default DealsListItem;