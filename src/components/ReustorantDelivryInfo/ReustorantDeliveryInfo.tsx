import ClockIcon from '../../assets/icons/ClockIcon';
import IReustorantDeliveryInfo from '../../interfaces/IReustorantDeliveryInfo';

const ReustorantDeliveryInfo = (props: IReustorantDeliveryInfo) => {
    const {minDeliveryTime, maxDeliveryTime, minAmount} = props;

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

export default ReustorantDeliveryInfo;