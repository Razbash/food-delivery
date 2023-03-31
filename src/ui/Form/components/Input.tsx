import IInput from '../interfaces/IInput';
import '../form.scss';

const Input = ({
    label,
    id,
    value,
    placeholder,
    onChange,
    icon,
    isRequired = false,
    type = 'text',
    autocomplete = 'off',
}: IInput) => {
    const onSetValue = (value: string) => {
        onChange(value);
    };

    return(
        <div className="input-wrapper">
            <label htmlFor={id} className="input-label">{label}</label>

            <div className="input-with-icon">
                <input type={type}
                    id={id}
                    className="input"
                    required={isRequired}
                    placeholder={placeholder}
                    value={value}
                    autoComplete={autocomplete}
                    onChange={(e) => onSetValue(e.target.value)}
                />

                {icon ? icon : null}
            </div>
        </div>
    );
};

export default Input;