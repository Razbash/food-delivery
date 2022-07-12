import reustorantImage from "../../assets/images/reustorants/royalSushiHouse.jpg";
import ReustorantDeliveryInfo from "../ReustorantDelivryInfo/ReustorantDeliveryInfo";

const ReustorantInfo = () => {
    return(
        <div className="reustorant-detail-page">
            <div className="container reustorant-detail-page__wrapper">
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

                <div className="reustorant-detail-page__map">
                    карта
                </div>
            </div>
        </div>
    )
}

export default ReustorantInfo;