import { useEffect, useState } from "react";

const Filters = () => {
    const [amountFilter, setAmountFilter] = useState<boolean>(false);
    const amountFilterClass = amountFilter ? "filters__item filters__item--active" : "filters__item";
    const amountFilterDropdownClass = amountFilter ? "filters__dropdown" : "filters__dropdown filters__dropdown--hidden";

    const toggleAmountFilter = () => {
        setAmountFilter(!amountFilter);
    }

    const onChangeAmountFilter = (value: boolean) => {
        setAmountFilter(value);
    }

    const handlerCloseDropdon = (event: any) => {
        const filtersBlock = document.querySelector('.filters');
        let withinBoundaries = false;

        if (filtersBlock) {
            withinBoundaries = event.composedPath().includes(filtersBlock);
        }

        if (!withinBoundaries ) {
            onChangeAmountFilter(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', (event) => handlerCloseDropdon(event));

        return function cleanup() {
            document.removeEventListener('click', (event) => handlerCloseDropdon(event));
        }

    },[]);

    return(
        <div className="filters">
            <div className="filters__item-wrapper">
                <span className={amountFilterClass}
                    onClick={toggleAmountFilter}
                >
                    Minimum delivery amount
                </span>

                <div className={amountFilterDropdownClass}>
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