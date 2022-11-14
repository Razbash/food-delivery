import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import IReaustorant from "../../interfaces/IReustorant";
import { changeFilterReustorants, fetchReustorants } from "../../store/actions/reustorantsActions";
// Миша всё хуйня, давай по новой
const Filters = () => {
    const [amountFilter, setAmountFilter] = useState<boolean>(false);
    const [minMaxProducts, setMinMaxProducts] = useState<[number, number]>([0, 0]);
    const amountFilterClass = amountFilter ? "filters__item filters__item--active" : "filters__item";
    const amountFilterDropdownClass = amountFilter ? "filters__dropdown" : "filters__dropdown filters__dropdown--hidden";
    const dispatch = useAppDispatch();

    const {reustorants} = useAppSelector(state => state.reustorants);

    const filtered = reustorants;

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

    const onAmountInputChange = (event: any, mode: string) => {
        switch(mode) {
            case "max":
                setMinMaxProducts([minMaxProducts[0], event.target.value]);
                break;
            case "min":
                setMinMaxProducts([event.target.value, minMaxProducts[minMaxProducts.length - 1]]);
                break;
        }
    }

    useEffect(() => {
        document.addEventListener('click', (event) => handlerCloseDropdon(event));

        dispatch(fetchReustorants());

        return function cleanup() {
            document.removeEventListener('click', (event) => handlerCloseDropdon(event));
        }

    },[]);

    useEffect(() => {
        const reustorantsAmounts =
            reustorants.map(element => {
                return element.minAmount;
            }).sort((a, b) => {
                return a - b;
            });

        setMinMaxProducts([reustorantsAmounts[0], reustorantsAmounts[reustorantsAmounts.length - 1]])
    }, [reustorants]);

    useEffect(() => {
        let test:IReaustorant[] = [];

        reustorants.map(element => {
            if (element.minAmount >= minMaxProducts[0] && element.minAmount <= minMaxProducts[minMaxProducts.length - 1]) {
                test.push(element);
            }
        })

        if (test.length) {
            dispatch(changeFilterReustorants(test));
        }
    }, [minMaxProducts])

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
                                value={minMaxProducts[0]}
                                onChange={(event) => onAmountInputChange(event, 'min')}
                            />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="max" className="input-label">To</label>
                            <input type="text"
                                id="max"
                                className="input"
                                size={10}
                                value={minMaxProducts[minMaxProducts.length - 1]}
                                onChange={(event) => onAmountInputChange(event, 'max')}
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