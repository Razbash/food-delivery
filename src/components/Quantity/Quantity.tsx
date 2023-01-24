import IQuantity from "./interfaces/IQuantity";
import "./quantity.scss";

const Quantity = ({counter, onChangeCounter}: IQuantity) => {
    let quantityDecreaseMeta = "quantity__decrease";

    if (counter === 1) {
        quantityDecreaseMeta += " quantity__decrease--disabled";
    }

    const onChangeCount = (mode: string) => {
        switch(mode) {
            case 'increase':
                onChangeCounter(counter + 1);
                break;
            case 'decrease':
                onChangeCounter(counter - 1);
                break;
        }
    }

    return(
        <div className="quantity">
            <span className={quantityDecreaseMeta} onClick={() => onChangeCount('decrease')}>-</span>
            <span className="quantity__value">{counter}</span>
            <span className="quantity__increase" onClick={() => onChangeCount('increase')}>+</span>
        </div>
    )
}

export default Quantity;