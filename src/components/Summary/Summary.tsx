interface ISummaryProps {
    totalPrice: number,
    onSubmit: () => void,
    buttonText: string,

}

const Summary = (props: ISummaryProps) => {
    const {totalPrice, onSubmit, buttonText} = props;

    return(
        <div className="cart-payment-summary">
            <h6 className="cart__block-item-title-text">Payment summary</h6>
            <div className="cart-payment-summary__features">
                <div className="cart-payment-summary__features-item cart-payment-summary__features-item--strong">
                    <span className="cart-payment-summary__features-item-label">Total</span>
                    <span className="cart-payment-summary__features-item-value">${totalPrice.toFixed(2)}</span>
                </div>
            </div>

            <button type="button"
                className="button button--contained"
                onClick={onSubmit}
            >
                {buttonText}
            </button>
        </div>
    )
}

export default Summary;