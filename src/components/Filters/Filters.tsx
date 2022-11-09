const Filters = () => {
    return(
        <div className="filters">
            <div className="filters__item-wrapper">
                <span className="filters__item">Minimum delivery amount</span>

                <div className="filters__dropdown">
                    <span className="filters__dropdown-label">Specify the price range</span>
                    <div className="filters__range-slider-wrapper">
                    </div>
                    <div className="filters__dropdown-controls">
                        <div className="input-wrapper">
                            <label htmlFor="min" className="input-label">From</label>
                            <input type="text"
                                id="min"
                                className="input"
                                size={10}
                            />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="max" className="input-label">To</label>
                            <input type="text"
                                id="max"
                                className="input"
                                size={10}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="filters__item-wrapper">
                <span className="filters__item">delivery time</span>
            </div>

            <div className="filters__transparent-separator"></div>
        </div>
    )
}

export default Filters;