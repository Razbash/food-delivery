const Summary = () => {
    return(
        <div className="summary">
            <div className="summary__inputs">
                <div className="input-wrapper">
                    <label htmlFor="coupon_code" className="input-label">Coupon code</label>
                    <input type="text"
                        id="coupon_code"
                        className="input"
                        required
                        placeholder="Enter coupon code"
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="tips" className="input-label">Tips</label>
                    <input type="text"
                        id="tips"
                        className="input"
                        required
                    />
                </div>
            </div>

            <div className="summary__total">
                <div className="summary__item">
                    <span className="summary__label">Subtotal</span>
                    <span className="summary__value">$129.40</span>
                </div>
                <div className="summary__item">
                    <span className="summary__label">Shipping</span>
                    <span className="summary__value">$20.00</span>
                </div>
                <div className="summary__item">
                    <span className="summary__label">Tips</span>
                    <span className="summary__value">$5.00</span>
                </div>
                <div className="summary__item">
                    <span className="summary__label">Discpunt (coupon)</span>
                    <span className="summary__value">$0.00</span>
                </div>
                <div className="summary__item summary__item">
                    <span className="summary__label summary__label--bold">Total (Tax incl.)</span>
                    <span className="summary__value summary__value--bold">$154.40</span>
                </div>
            </div>

            <button className="button button--contained">Submit order</button>
        </div>
    )
}

export default Summary;