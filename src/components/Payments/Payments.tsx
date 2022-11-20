import VisaIcon from "../../assets/icons/VisaIcon";
import MastercardIcon from "../../assets/icons/MastercardIcon";
import DotsIcon from "../../assets/icons/DotsIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import IUser from "../../interfaces/IUser";

interface IProps {
    title: string,
    cardToAdd?: boolean,
    cardSavingCheckbox?: boolean,
    userData: IUser,
}

const Payments = (props: IProps) => {
    const {title, cardToAdd, cardSavingCheckbox, userData} = props;
    const {paymentMethods} = userData;

    const cards = [
        {
            number: "**** **** **** 4629",
            term: "12/25",
            name: "Jane Robertson",
            icon: <VisaIcon/>
        },
        {
            number: "**** **** **** 9372",
            term: "10/23",
            name: "Jane Robertson",
            icon: <MastercardIcon/>
        },
    ];

    return(
        <>
            <div className="payments">
                {paymentMethods ?
                    <>
                        <h5 className="block-title">
                            {title}
                        </h5>
                        <div className="payments__cards">
                            {paymentMethods.map((element, index) => {
                                const {id, cardNumber, cardHolder, cvc, expiration} = element;

                                return(
                                    <div className="payments__card-item" key={id}>
                                        <div className="payments__number-and-controls">
                                            <span className="payments__number">
                                                {cardNumber}
                                            </span>
                                            <div className="payments__controls">
                                                <DotsIcon/>
                                            </div>
                                        </div>
                                        <span className="payments__terms">
                                            {expiration}
                                        </span>
                                        <div className="payments__cardholder">
                                            <span className="payments__cardholder-name">
                                                {cardHolder}
                                            </span>
                                            <div className="payments__card-icon">
                                                {/* Вывести другую иконку */}
                                                <VisaIcon/>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {cardToAdd ?
                                <div className="payments__card-item">
                                    <div className="payments__add-new-card">
                                        <div className="payments__add-new-card-icon">
                                            <PlusIcon/>
                                        </div>
                                        <span className="payments__add-new-card-text">New payment methods</span>
                                    </div>
                                </div>
                            : null}
                        </div>
                    </>
                : null}

                <div className="payments__new-card">
                    <h6 className="payments__label">New payment method</h6>

                    <form action="#" className="payment__new-card-form">
                        <div className="payments__new-card-info">
                            <div className="input-wrapper">
                                <label htmlFor="card_number" className="input-label">Card number</label>
                                <input type="text"
                                    id="card_number"
                                    className="input"
                                    required
                                    placeholder="XXXX - XXXX - XXXX - XXXX"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="expiration" className="input-label">Expiration</label>
                                <input type="text"
                                    id="expiration"
                                    className="input"
                                    required
                                    placeholder="MM / YYYY"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="cvc" className="input-label">CVC</label>
                                <input type="text"
                                    id="cvc"
                                    className="input"
                                    required
                                    placeholder="XXX"
                                />
                            </div>
                        </div>
                        <div className="payments__new-card-cardholder">
                            <div className="input-wrapper">
                                <label htmlFor="cardholder" className="input-label">Cardholder</label>
                                <input type="text"
                                    id="cardholder"
                                    className="input"
                                    required
                                    placeholder="Enter name on card"
                                />
                            </div>
                        </div>
                        <div className="payments__new-card-controls">
                            {cardSavingCheckbox ?
                                <label className="checkbox">
                                    <input type="checkbox" id="save_method" className="checkbox__input"/>
                                    <span className="checkbox__label">Save this payment method</span>
                                </label>
                            : null}

                            <div className="button button--contained-light-blue">Add new payment method</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Payments;