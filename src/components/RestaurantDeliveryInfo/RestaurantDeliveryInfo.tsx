import IRestaurantDeliveryInfo from "./interfaces/IRestaurantDeliveryInfo";
import { ClockIcon } from "../../ui/icons";

import "./restaurantsDeliveryInfo.scss";

const RestaurantDeliveryInfo = ({minDeliveryTime, maxDeliveryTime, minAmount}: IRestaurantDeliveryInfo) => {
    return(
        <div className="reustorant-delivery-info">
            <ClockIcon/>

            <span>
                {minDeliveryTime}-{maxDeliveryTime} min
            </span>
            <div className="reustorant-delivery-info__separator"></div>
            <span>
                ${minAmount} min sum
            </span>
        </div>
    )
}

export default RestaurantDeliveryInfo;