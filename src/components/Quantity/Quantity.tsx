import IQuantity from "./interfaces/IQuantity";
import EnumCartControlsMode from "./interfaces/EnumCartControlsMode";
import "./quantity.scss";

const Quantity = ({counter, onChangeCounter}: IQuantity) => {
    let quantityDecreaseMeta = "quantity__decrease";

    if (counter === 1) {
        quantityDecreaseMeta += " quantity__decrease--disabled";
    }

    const onChangeCount = (mode: string) => {
        switch(mode) {
            case EnumCartControlsMode.INCREASE:
                onChangeCounter(counter + 1);
                break;
            case EnumCartControlsMode.DESCRESE:
                onChangeCounter(counter - 1);
                break;
        }
    }

    return(
        <div className="quantity">
            <span className={quantityDecreaseMeta} onClick={() => onChangeCount(EnumCartControlsMode.DESCRESE)}>-</span>
            <span className="quantity__value">{counter}</span>
            <span className="quantity__increase" onClick={() => onChangeCount(EnumCartControlsMode.INCREASE)}>+</span>
        </div>
    )
}

export default Quantity;