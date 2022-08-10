import VisaIcon from "../../assets/icons/VisaIcon";
import MastercardIcon from "../../assets/icons/MastercardIcon";
import DotsIcon from "../../assets/icons/DotsIcon";

const Payments = () => {
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
        <div className="payments">
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
                                {icon}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Payments;