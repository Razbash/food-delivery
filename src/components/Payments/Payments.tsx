import VisaIcon from "../../assets/icons/VisaIcon";
import MastercardIcon from "../../assets/icons/MastercardIcon";
import DotsIcon from "../../assets/icons/DotsIcon";
import PlusIcon from "../../assets/icons/PlusIcon";

interface IProps {
    title: string,
    cardToAdd?: boolean,
    cardSavingCheckbox?: boolean,
}

const Payments = (props: IProps) => {
    const {title, cardToAdd, cardSavingCheckbox} = props;
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
                <h6 className="block-title">
                    {title}
                </h6>
                <div className="payments__cards">
                    {cards.map((element, index) => {
                        const {number, term, name, icon} = element;

                        return(
                            <div className="payments__card-item" key={index}>
                                <div className="payments__number-and-controls">
                                    <span className="payments__number">
                                        {number}
                                    </span>
                                    <div className="payments__controls">
                                        <DotsIcon/>
                                    </div>
                                </div>
                                <span className="payments__terms">
                                    {term}
                                </span>
                                <div className="payments__cardholder">
                                    <span className="payments__cardholder-name">
                                        {name}
                                    </span>
                                    <div className="payments__card-icon">
                                        {icon}
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