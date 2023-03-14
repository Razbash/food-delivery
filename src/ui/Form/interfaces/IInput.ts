interface IInput {
    label: string,
    id: string,
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
    icon?: React.ReactNode,
    type?: string,
    isRequired?: boolean,
    autocomplete?: string,
}

export default IInput;