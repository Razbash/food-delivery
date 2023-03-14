import ICheckbox from '../interfaces/ICheckbox';
import '../form.scss';

const Checkbox = ({id, label, value, setValue}: ICheckbox) => {
    const onSetValue = () => {
        setValue(!value);
    };

    return(
        <label className="checkbox">
            <input type="checkbox"
                id={id}
                className="checkbox__input"
                checked={value}
                onChange={onSetValue}
            />

            <span className="checkbox__label">{label}</span>
        </label>
    );
};

export default Checkbox;